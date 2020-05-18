import { Entity, Screen } from '@palmyra-devkit/core-api/shared';

export interface Properties {
  schema: any;
  uuid: string;
  layout?: any;
  rules?: any[];
  breakpointsRequired?: boolean;
  fieldRequired?: boolean;
  nameRequired?: boolean;
  flatProperties: boolean;
  hideSecurityConfig?: boolean;
  title: string;
  container?: boolean;
  parentName?: string;
}
