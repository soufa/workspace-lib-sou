import { Subscription } from 'rxjs';
import { TreeNode } from 'primeng/api';

import { Entity } from '@palmyra-devkit/core-api/shared';

import { UiComponent } from './widgets-library/ui-component';

export interface UiTreeNode extends TreeNode {
  oldData?: any;
  uuid?: string;
  uicomponent?: UiComponent;
  customicon?: string;
  count?: number;
  model?: Entity;
  errorsMsg?: string;
  dataSubscription?: Subscription;
  childs?: any[];
  parents?: any[];
  updated?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
  bindingMsg?: string;
}
