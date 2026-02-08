export interface InvestigationReport {
  risk_assessment: {
    level: string; // 'critical' | 'high' | 'medium' | 'low'
    confidence: number;
    summary: string;
  };
  anomalies_detected: {
    type: string;
    severity: string;
    description: string;
  }[];
  key_findings: {
    suspicious: string[];
    mitigating: string[];
  };
  timeline_analysis: {
    reconstruction: string;
    events: {
      time: string;
      event: string;
      risk: string;
    }[];
  };
  pattern_match: {
    pattern_name: string;
    confidence: number;
    description: string;
  };
  recommended_actions: {
    immediate: string[];
    followup: string[];
    user_communication?: string;
  };
  investigation_questions: string[];
}

export interface InvestigationContext {
  transaction: {
    id: string;
    amount: number;
    currency: string;
    merchant_name: string;
    merchant_category: string;
    location: { city: string; country: string };
    timestamp: string;
    auth_result: string;
  };
  user: {
    id: string;
    name: string;
    account_age_days: number;
    typical_locations: string[];
    transaction_stats_30d: {
      average_amount: number;
      count: number;
    };
  };
  device: {
    device_name: string;
    is_known_device: boolean;
    registered_date: string;
    total_authentications: number;
    last_used_before_this: string;
    last_location_before_this: { city: string };
  };
  recent_activity: {
    timestamp: string;
    action: string;
    amount?: number;
    merchant?: string;
    location: string;
    status: string;
    device?: string;
  }[];
}

export interface InvestigationResponse {
  analysis: InvestigationReport;
  raw_data: InvestigationContext;
}