import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { TreeDragDropService } from 'primeng/api';
import { flatten, orderBy } from 'lodash';

import {
  UiComponent,
  WidgetsLibraryModel,
  UiTreeNode,
  Category
} from '../../../models';
import { UuidService } from '../../../core';

@Component({
  selector: 'sc-store-displayer',
  templateUrl: './store-displayer.component.html',
  styleUrls: ['./store-displayer.component.css']
})
export class StoreDisplayerComponent implements OnChanges {
  @Input() store: WidgetsLibraryModel;
  @Input() mask: boolean;
  @Input() screen: string;

  categories: Category[] = [];
  components: UiComponent[] = [];

  constructor(
    private treeDragDropService: TreeDragDropService,
    private uuidService: UuidService
  ) {}
  /**
   * Init the component treeNode
   * when start dragging
   * @param component - Component
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.store || changes.screen) {
      this.categories = this.filterComponents(
        this.store && this.store.categories
      );
      this.components = flatten(
        this.categories.map(category => category.components)
      );
    }
  }

  startDragComponent(component: UiComponent) {
    let componentDnDNode;
    if (!component['defaultContent']) {
      componentDnDNode = this.initDraggableComponentNode(component);
      componentDnDNode = this.addComponentMetaData(component, componentDnDNode);
    } else {
      componentDnDNode = this.buildNodeTree(
        [component['defaultContent']],
        this.components
      )[0];
    }
    this.treeDragDropService.startDrag({
      tree: null,
      node: componentDnDNode,
      subNodes: [componentDnDNode],
      index: 1,
      scope: component.scope
        ? component.scope.filter(
            scope =>
              scope.split('.').find(item => item === this.screen) !== undefined
          )
        : ''
    });
  }

  private initDraggableComponentNode(component: UiComponent): UiTreeNode {
    const hasChild =
      component.container && component.childs && component.childs.length > 0;
    const data = { type: component.name, properties: {} };
    if (component.container) {
      const randomName = Date.now().toString();
      data['components'] = [];
      data['componentsBreakpoints'] = { xs: 12, sm: 12, md: 6, lg: 4 };
      data['name'] = `${component.name}-${randomName.substr(8)}`;
    }
    const draggableNode = {
      label: component.name,
      leaf: component.container ? false : true,
      children: component.container ? [] : undefined,
      data,
      rules: component['rules'],
      droppable: component.container ? true : false,
      type: 'sectionItem',
      expanded: component.container ? true : false,
      styleClass: hasChild ? 'child-item-container' : null,
      customicon: component.icon
    };

    if (component['defaultChilds']) {
      this.addDefaultChilds(draggableNode, component);
    }
    return draggableNode;
  }

  /**
   * Build component node that have default content.
   */
  buildNodeTree(content, allComponent) {
    return content.map(element => {
      const component = allComponent.find(cmp => cmp.name === element.type);
      let node = this.initDraggableComponentNode(component);
      node = this.addComponentMetaData(component, node);
      node.data = element;
      node.children =
        element.components && element.components.length > 0
          ? this.buildNodeTree(element.components, allComponent)
          : [];
      return node;
    });
  }

  private addDefaultChilds(draggableNode: UiTreeNode, component: UiComponent) {
    const childComponentName = component['defaultChilds'].child;
    const childNumber = +component['defaultChilds'].number;
    const breakPointsRequired = component['defaultChilds'].breakpointsRequired;
    const childComponent = this.components.find(
      cmp => cmp.name === childComponentName
    );
    childComponent.breakpointsRequired = breakPointsRequired;
    draggableNode['noComponentsBreakpoints'] =
      component['noComponentsBreakpoints'];
    draggableNode['defaultChilds'] = component['defaultChilds'];
    draggableNode['childComponentsBreakpoints'] = breakPointsRequired;
    if (childComponent) {
      for (let index = 0; index < childNumber; index++) {
        let childNode = this.initDraggableComponentNode(childComponent);
        childNode = this.addComponentMetaData(childComponent, childNode);
        draggableNode.children.push(childNode);
      }
    }
  }

  private addComponentMetaData(
    component: UiComponent,
    node: UiTreeNode
  ): UiTreeNode {
    return {
      ...node,
      childs: component.childs,
      parents: component.parents
    };
  }

  private filterComponents(categories: Category[]): Category[] {
    if (!categories) {
      return [];
    }
    return categories
      .map(category => {
        return {
          ...category,
          components: orderBy(
            category.components.filter(component => {
              if (this.screen && component.rules) {
                const screenRules = component.rules.filter(rule =>
                  this.isScreenAllowed(rule, this.screen)
                );
                return screenRules.length > 0 ? true : false;
              }
              return true;
            }),
            'displayOrder'
          )
        };
      })
      .filter(category => category.components.length > 0);
  }

  private isScreenAllowed(rule: any, screen: string): boolean {
    return (
      (rule.includedScreens &&
        rule.includedScreens.includes(screen) &&
        !(rule.excludedScreens && rule.excludedScreens.includes(screen))) ||
      (rule.includedScreens &&
        rule.includedScreens.length === 0 &&
        rule.excludedScreens &&
        rule.excludedScreens.length === 0)
    );
  }
}
