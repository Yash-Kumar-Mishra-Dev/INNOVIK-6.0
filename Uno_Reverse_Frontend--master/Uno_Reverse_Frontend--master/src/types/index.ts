export interface User {
  id: string;
  name: string;
  role_id: string;
  phone: string;
  email: string;
  language_pref: string;
  status: string;
}

export interface Department {
  id: string;
  name: string;
  type: string;
  status: string;
}

export interface Incident {
  id: string;
  type: string;
  severity: string;
  lat: number;
  lng: number;
  status: string;
  reported_by: string;
  verified_by?: string;
  source: 'citizen' | 'sensor' | 'field';
}

export interface Mission {
  id: string;
  incident_id: string;
  assigned_team_id: string;
  priority_score: number;
  required_resources: string[];
  deadline: string;
  status: string;
}

export interface Resource {
  id: string;
  type: string;
  quantity: number;
  status: string;
  location: string;
  owning_department_id: string;
}

export interface Alert {
  id: string;
  type: string;
  severity: string;
  message: string;
  target_audience: string;
  channel: string[];
  sent_at: string;
}

export interface SensedZoneState {
  id: string;
  zone_id: string;
  metric: string;
  fused_value: number;
  confidence: number;
  contributing_sources: string[];
  timestamp: string;
}
