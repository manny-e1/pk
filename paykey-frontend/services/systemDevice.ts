import { UAParser } from 'ua-parser-js';

interface NetworkInformation extends EventTarget {
  readonly type?: 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown';
  readonly effectiveType?: '2g' | '3g' | '4g' | 'slow-2g';
  readonly saveData?: boolean;
}

interface NavigatorWithExtras extends Navigator {
  connection?: NetworkInformation;
  userAgentData?: {
    brands: { brand: string; version: string }[];
    mobile: boolean;
    platform: string;
    getHighEntropyValues: (hints: string[]) => Promise<{
      architecture?: string;
      bitness?: string;
      model?: string;
      platformVersion?: string;
      uaFullVersion?: string;
    }>;
  };
}

// --- INTERFACE OUTPUT ---
export interface DeviceTelemetry {
  device_type: string;
  device_vendor: string;
  device_model: string;
  os_name: string;
  os_version: string;
  browser_name: string;
  browser_version: string;
  screen_resolution: string;
  gpu_renderer: string;
  network_type: string;
  gps_latitude: number | null;
  gps_longitude: number | null;
  gps_accuracy: number | null;
  timezone: string;
  language: string;
}

export const deviceService = { 
  
  async getDeviceTelemetry(): Promise<DeviceTelemetry> {
    if (typeof window === 'undefined') {
        return this.getEmptyTelemetry();
    }

    const nav = navigator as NavigatorWithExtras;
    
    const parser = new UAParser(); 
    const uaResult = parser.getResult();

    let preciseModel = '';
    let preciseOSVersion = '';
    
    if (nav.userAgentData && typeof nav.userAgentData.getHighEntropyValues === 'function') {
      try {
        const hints = await nav.userAgentData.getHighEntropyValues(['model', 'platformVersion']);
        if (hints.model) preciseModel = hints.model;
        if (hints.platformVersion) preciseOSVersion = hints.platformVersion;
      } catch (e) {}
    }

    // 2. GPU RENDERER
    let gpuRenderer = 'Unknown GPU';
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
            const debugInfo = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
            if (debugInfo) {
                gpuRenderer = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            }
        }
    } catch (e) {}

    // 3. NETWORK TYPE
    let netType = 'UNKNOWN';
    if (nav.connection) {
      const type = nav.connection.type || 'unknown';
      const speed = nav.connection.effectiveType || '';
      netType = type !== 'unknown' ? type.toUpperCase() : speed.toUpperCase();
    }

    // 4. GEOLOCATION
    let lat: number | null = null;
    let lng: number | null = null;
    let acc: number | null = null;

    try {
        // const pos = await this.getCurrentPosition();
        // lat = pos.coords.latitude;
        // lng = pos.coords.longitude;
        // acc = pos.coords.accuracy;
        lat = null;
        lng = null;
        acc = null;

    } catch (e) {}

    return {
      device_type: uaResult.device.type || (this.isDesktop() ? 'desktop' : 'mobile'),
      device_vendor: uaResult.device.vendor || 'Generic',
      device_model: preciseModel || uaResult.device.model || 'Unknown Model',
      os_name: uaResult.os.name || 'Unknown OS',
      os_version: preciseOSVersion || uaResult.os.version || '',
      browser_name: uaResult.browser.name || 'Unknown Browser',
      browser_version: uaResult.browser.version || '',
      screen_resolution: `${window.screen.width}x${window.screen.height} (${window.devicePixelRatio}x)`,
      gpu_renderer: gpuRenderer,
      network_type: netType,
      gps_latitude: lat,
      gps_longitude: lng,
      gps_accuracy: acc,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language
    };
  },

  // getCurrentPosition(): Promise<GeolocationPosition> {
  //   return new Promise((resolve, reject) => {
  //     if (!navigator.geolocation) return reject();
  //     navigator.geolocation.getCurrentPosition(resolve, reject, { 
  //         enableHighAccuracy: true, timeout: 4000, maximumAge: 0 
  //     });
  //   });
  // },

  isDesktop(): boolean {
      const userAgent = navigator.userAgent.toLowerCase();
      return !/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  },

  getEmptyTelemetry(): DeviceTelemetry {
      return {
          device_type: 'server', device_vendor: '', device_model: '',
          os_name: '', os_version: '', browser_name: '', browser_version: '',
          screen_resolution: '', gpu_renderer: '', network_type: '',
          gps_latitude: null, gps_longitude: null, gps_accuracy: null,
          timezone: '', language: ''
      };
  }
};