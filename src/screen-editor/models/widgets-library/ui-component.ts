import { Rule } from './rule';

export interface UiComponent {
  name?: string;
  icon?: string;
  category?: string;
  role?: any;
  childs?: string[];
  parents?: string[];
  schema?: any;
  layout?: any;
  layouts?: boolean;
  container?: boolean;
  fieldRequired?: boolean;
  nameRequired?: boolean;
  breakpointsRequired?: boolean;
  hideSecurityConfig?: boolean;
  rules?: Rule[];
  scope?: string[];
  defaultScreen?: any;
}
