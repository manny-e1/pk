function log(...args) { document.getElementById('log').textContent += args.join(' ') + '\n'; }

function bufferToBase64Url(buffer) {
  const bytes = new Uint8Array(buffer);
  let str = '';
  for (let i = 0; i < bytes.length; i++) str += String.fromCharCode(bytes[i]);
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlToBuffer(base64url) {
  const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
  const pad = base64.length % 4 === 0 ? '' : '='.repeat(4 - (base64.length % 4));
  const binary = atob(base64 + pad);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

async function startRegistration() {
  // gather inputs
  const userName = document.getElementById('userName').value || 'TestUser';
  const displayName = document.getElementById('displayName').value || userName;
  let userId = document.getElementById('userId').value;
  // if not set, try localStorage, else generate
  if (!userId) {
    userId = localStorage.getItem('webauthn_user_id') || null;
    if (!userId) {
      // generate a stable user id
      userId = generateRandomBase64Url(32);
      localStorage.setItem('webauthn_user_id', userId);
      document.getElementById('userId').value = userId;
    }
  }
  log('Requesting registration challenge for user', userId);

  const body = {
    rp: { name: 'Test RP', id: 'localhost' },
    user: { name: userName, id: userId, displayName: displayName },
    authenticatorSelection: { authenticatorAttachment: 'platform', requireResidentKey: true, userVerification: 'preferred' },
    attestation: 'none'
  };

  const res = await fetch('/reg/start', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    log('Error requesting reg options:', res.status, txt);
    return;
  }
  const options = await res.json();
  log('Received reg options', JSON.stringify(options));

  // convert challenge and user id and exclude ids
  const publicKey = {
    challenge: base64UrlToBuffer(options.challenge),
    rp: options.rp,
    user: { id: base64UrlToBuffer(options.user.id), name: options.user.name, displayName: options.user.displayName },
    pubKeyCredParams: options.pubKeyCredParams.map(p => ({ type: p.type, alg: p.alg })),
    timeout: options.timeout,
    authenticatorSelection: options.authenticatorSelection,
    attestation: options.attestation,
    extensions: options.extensions
  };

  if (options.excludeCredentials && options.excludeCredentials.length) {
    publicKey.excludeCredentials = options.excludeCredentials.map(c => ({ id: base64UrlToBuffer(c.id), type: c.type, transports: c.transports }));
  }

  log('Calling navigator.credentials.create');
  const cred = await navigator.credentials.create({ publicKey });
  log('Created credential', cred);

  // build payload to send to RP server to verify with paykey-server
  const clientDataJSON = bufferToBase64Url(cred.response.clientDataJSON);
  const attestationObject = bufferToBase64Url(cred.response.attestationObject);
  const rawId = bufferToBase64Url(cred.rawId);

  const payload = {
    serverPublicKeyCredential: {
      id: cred.id,
      type: cred.type,
      response: {
        clientDataJSON: clientDataJSON,
        attestationObject: attestationObject
      },
      // extensions left empty
    },
    sessionId: options.sessionId,
    origin: window.location.origin,
    rpId: options.rp.id,
    tokenBinding: null
  };

  log('Sending attestation to /reg/complete');
  const v = await fetch('/reg/complete', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  if (!v.ok) {
    const txt = await v.text().catch(() => '');
    log('Error during registration complete:', v.status, txt);
    return;
  }
  const result = await v.json();
  log('Registration result:', JSON.stringify(result));
}

async function startAuthentication() {
  // choose user id from input or stored value
  let userId = document.getElementById('userId').value;
  if (!userId) userId = localStorage.getItem('webauthn_user_id');
  if (!userId) {
    log('No user id present. Register first or generate an id.');
    return;
  }
  log('Requesting auth challenge for user', userId);

  const body = { rpId: 'localhost', userId: userId, userVerification: 'preferred' };
  const res = await fetch('/auth/start', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    log('Error requesting auth options:', res.status, txt);
    return;
  }
  const options = await res.json();
  log('Received auth options', JSON.stringify(options));

  const publicKey = {
    challenge: base64UrlToBuffer(options.challenge),
    timeout: options.timeout,
    rpId: options.rpId,
    userVerification: options.userVerification,
    extensions: options.extensions
  };

  if (options.allowCredentials && options.allowCredentials.length) {
    publicKey.allowCredentials = options.allowCredentials.map(c => ({ id: base64UrlToBuffer(c.id), type: c.type, transports: c.transports }));
  }

  log('Calling navigator.credentials.get');
  const assertion = await navigator.credentials.get({ publicKey });
  log('Got assertion', assertion);

  const payload = {
    serverPublicKeyCredential: {
      id: assertion.id,
      type: assertion.type,
      response: {
        clientDataJSON: bufferToBase64Url(assertion.response.clientDataJSON),
        authenticatorData: bufferToBase64Url(assertion.response.authenticatorData),
        signature: bufferToBase64Url(assertion.response.signature),
        userHandle: assertion.response.userHandle ? bufferToBase64Url(assertion.response.userHandle) : null
      }
    },
    sessionId: options.sessionId,
    origin: window.location.origin,
    rpId: options.rpId,
    tokenBinding: null
  };

  log('Sending assertion to /auth/complete');
  const v = await fetch('/auth/complete', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  if (!v.ok) {
    const txt = await v.text().catch(() => '');
    log('Error during authentication complete:', v.status, txt);
    return;
  }
  const result = await v.json();
  log('Authentication result:', JSON.stringify(result));
}

document.getElementById('btnReg').addEventListener('click', () => startRegistration().catch(e => log('Error:', e)));
document.getElementById('btnAuth').addEventListener('click', () => startAuthentication().catch(e => log('Error:', e)));
document.getElementById('btnGenId').addEventListener('click', () => {
  const id = generateRandomBase64Url(32);
  document.getElementById('userId').value = id;
  localStorage.setItem('webauthn_user_id', id);
  log('Generated user id', id);
});

function generateRandomBase64Url(len) {
  const a = new Uint8Array(len);
  window.crypto.getRandomValues(a);
  let str = '';
  for (let i = 0; i < a.length; i++) str += String.fromCharCode(a[i]);
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
