import { ReactNode } from "react";


export type DeviceStatus = 'active' | 'suspended' | 'revoked';

export interface Device {
  recentActivity: any;
  lastIp: ReactNode;
  osVersion: ReactNode;
  osName: ReactNode;
  deviceModel: ReactNode;
  modelAndOnboardingAuth: string;
  id: string;
  dbId: string;
  name: string;
  type: string;
  model: string;
  user: string;
  userId: string;
  initials: string;
  status: string;
  lastActive: string;
  lastActiveClass: string;
  registered: string;
  credential: string;
  approvals: number;
  ip: string;
  location?: string;
  rate?: string;
  revokedOn?: string;
  reason?: string;
  email: string;
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