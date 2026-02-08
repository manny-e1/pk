

export type DeviceStatus = 'active' | 'suspended' | 'revoked';

export interface Device {
  id: string;              // Credential ID (API key)
  dbId: string;            // Database Internal ID
  name: string;            // Device Name
  type: string;            // 'mobile' | 'desktop'
  model: string;           // Detailed model
  user: string;            // User Display Name
  userId: string;          // User Email
  initials: string;        // Initials
  status: string;          // Lowercase status for UI
  lastActive: string;      // Formatted Date
  lastActiveClass: string; // 'recent', 'default', etc.
  registered: string;      // Formatted Date
  credential: string;      // Full Credential ID
  approvals: number;       // Sign Counter
  ip: string;              // IP Address
  location?: string;
  rate?: string;
  revokedOn?: string;
  reason?: string;
}

export interface AuthEvent {
  id: string;
  type: 'passkey_registered' | 'payment_approval_requested' | 'payment_approved' | 'payment_denied';
  timestamp: string;
  userId: string;
  paymentId?: string;
  device: {
    type: string;
    model: string;
    os: string;
  };
  location: {
    country: string;
    flag: string;
    ip: string;
  };
  risk: {
    amount?: string;
    amountClass?: 'low' | 'medium' | 'high';
    beneficiary?: 'new' | 'existing';
    tags?: Array<{ label: string; class: 'high' | 'medium' | 'low' | 'neutral' }>;
    network?: 'vpn' | 'proxy' | 'tor';
  };
  result: 'success' | 'fail' | 'timeout';
  isNewDevice?: boolean;
}


export type DeviceType = Device['type'];
export type EventType = AuthEvent['type'];
export type EventResult = AuthEvent['result'];