// lib/data.ts
import { Device, AuthEvent } from './types';



export const authEventsData: AuthEvent[] = [
  {
    id: 'evt_001',
    type: 'payment_approved',
    timestamp: '2024-12-27T14:32:08.234Z',
    userId: 'USR_8847291',
    paymentId: 'PAY_TX_29384756',
    device: {
      type: 'iPhone 15 Pro',
      model: 'iOS 17.2',
      os: 'Safari'
    },
    location: {
      country: 'Singapore',
      flag: '🇸🇬',
      ip: '103.***.***.42'
    },
    risk: {
      amount: '$850',
      amountClass: 'medium',
      beneficiary: 'existing'
    },
    result: 'success'
  },
  {
    id: 'evt_002',
    type: 'payment_denied',
    timestamp: '2024-12-27T14:28:45.000Z',
    userId: 'USR_2938475',
    paymentId: 'PAY_TX_29384701',
    device: {
      type: 'Windows PC',
      model: 'Win 11',
      os: 'Chrome 120'
    },
    location: {
      country: 'Russia',
      flag: '🇷🇺',
      ip: '185.***.***.91'
    },
    risk: {
      amount: '$5,200',
      amountClass: 'high',
      beneficiary: 'new',
      tags: [
        { label: 'GEO_ANOMALY', class: 'high' },
        { label: 'NEW_DEVICE', class: 'high' }
      ],
      network: 'vpn'
    },
    result: 'fail',
    isNewDevice: true
  },
  {
    id: 'evt_003',
    type: 'passkey_registered',
    timestamp: '2024-12-27T14:22:17.000Z',
    userId: 'USR_1029384',
    device: {
      type: 'Samsung S24 Ultra',
      model: 'Android 14',
      os: 'Chrome'
    },
    location: {
      country: 'Malaysia',
      flag: '🇲🇾',
      ip: '175.***.***.83'
    },
    risk: {},
    result: 'success'
  },
  {
    id: 'evt_004',
    type: 'payment_approval_requested',
    timestamp: '2024-12-27T14:18:33.000Z',
    userId: 'USR_5847291',
    paymentId: 'PAY_TX_29384699',
    device: {
      type: 'MacBook Pro',
      model: 'macOS 14.2',
      os: 'Safari'
    },
    location: {
      country: 'Japan',
      flag: '🇯🇵',
      ip: '126.***.***.15'
    },
    risk: {
      amount: '$2,500',
      amountClass: 'high',
      beneficiary: 'new'
    },
    result: 'timeout'
  }
];