export interface ScreenTemplate {
  name?: string;
  sections?: Section[];
  template?: string;
  icon?: string;
  schema?: any;
  layout?: any;
  breakpointsRequired?: boolean;
  nameRequired?: boolean;
  flatProperties?: boolean;
  count?: number;
}

export interface Section {
  name?: string;
  title?: string;
  path?: string;
  properties?: any;
  sections?: Section[];
  items?: any[];
  default?: string;
}
