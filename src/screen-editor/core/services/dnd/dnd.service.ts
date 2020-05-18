import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { remove } from 'lodash';
import { TreeDragDropService } from 'primeng/api';

import { UiTreeNode } from '../../../models/tree-node';

@Injectable()
export class DndService {
  private dragStartInfo: any;
  constructor(
    public dragDropService: TreeDragDropService,
//    private screenExplorerManagement: Store<ScreenExplorerState>
  ) {
    this.dragDropService.dragStart$.subscribe(event => {
      this.dragStartInfo = {
        dragNodeTree: event.tree,
        dragNode: event.node,
        dragNodeSubNodes: event.subNodes,
        dragNodeIndex: event.index,
        dragNodeScope: event.scope
      };
      if (event.tree) {
       /* this.screenExplorerManagement.dispatch(
          moveWidgetIndex({
            index: this.getSelectionPath(
              event.tree.tree.value[0].children,
              event.node
            )
          })
        );*/
      }
    });
  }

  getDroppedNode(): Observable<any> {
    return this.dragDropService.dragStop$.pipe(
      map(treeNode => {
        return treeNode;
      })
    );
  }
  /**
   * apply the tree dnd rules
   * @param dropNode - node to trop inside.
   * @param dragNode - node dragged from the widget store.
   */
  isDropNotAllowed(dropNode: UiTreeNode, dragNode: UiTreeNode): any {
    // drop into the root node
    if (dragNode.parents && dropNode.type === 'rootNode') {
      const removed = remove(
        dropNode.children,
        (node: UiTreeNode) => node.data.type === dragNode.data.type
      );
      return this._addRemovedNode(removed);
    }
    // drop into root node childrens
    if (
      dropNode.parent &&
      dropNode.parent.type === 'rootNode' &&
      dragNode.parents
    ) {
      const removed = remove(
        dropNode.parent.children,
        (node: UiTreeNode) => node.data.type === dragNode.data.type
      );
      if (removed.length > 0) {
        return this._addRemovedNode(removed);
      }
    }
    // when parent node have childs
    if (
      dropNode.parent &&
      dropNode.parent['childs'] &&
      !dropNode.parent['childs'].includes(dragNode.data.type)
    ) {
      const removed = remove(
        dropNode.parent.children,
        (node: UiTreeNode) => node.data.type === dragNode.data.type
      );
      if (removed.length > 0) {
        return this._addRemovedNode(removed);
      }
    }
    if (
      dragNode.parents &&
      dropNode.data &&
      !dragNode.parents.includes(dropNode.data.type)
    ) {
      const removed = remove(
        dropNode.children,
        (node: UiTreeNode) => node.data.type === dragNode.data.type
      );
      if (removed.length > 0) {
        return this._addRemovedNode(removed);
      }
    }
    // drop into node that have childs
    if (dropNode.childs && !dropNode.childs.includes(dragNode.data.type)) {
      const removed = remove(
        dropNode.children,
        (node: UiTreeNode) => node.data.type === dragNode.data.type
      );
      return this._addRemovedNode(removed);
    }
    // drag node have parents
    if (
      dragNode.parents &&
      dropNode.data &&
      dropNode.data.type &&
      !dragNode.parents.includes(dropNode.data.type)
    ) {
      const removed = remove(
        dropNode.children,
        (node: UiTreeNode) => node.data.type === dragNode.data.type
      );
      if (removed.length > 0) {
        return this._addRemovedNode(removed);
      }
    }
    if (
      dragNode.parents &&
      dropNode.parent &&
      dropNode.parent.data &&
      !dragNode.parents.includes(dropNode.parent.data.type)
    ) {
      const removed = remove(
        dropNode.parent.children,
        (node: UiTreeNode) => node.data.type === dragNode.data.type
      );
      return this._addRemovedNode(removed);
    }
    return;
  }

  private getSelectionPath(
    treeItems: any[],
    node: any,
    path?: string,
    parentIndex?: string
  ): string {
    const index = treeItems.indexOf(node);
    if (index < 0) {
      let i = 0;
      while (i < treeItems.length && path === undefined) {
        const children = treeItems[i].children;
        if (children && children.length > 0) {
          if (parentIndex) {
            path = this.getSelectionPath(
              children,
              node,
              path,
              [parentIndex, i].join('.')
            );
          } else {
            path = this.getSelectionPath(children, node, path, i.toString());
          }
        }
        i += 1;
      }
    }
    if (path) {
      return path;
    }
    if (!parentIndex) {
      return index.toString();
    }
    if (index < 0) {
      return undefined;
    }
    return [parentIndex, index].join('.');
  }

  private _addRemovedNode(removed: any[]) {
    if (removed.length > 0) {
      return this.dragStartInfo.dragNodeSubNodes.splice(
        this.dragStartInfo.dragNodeIndex,
        0,
        this.dragStartInfo.dragNode
      );
    }
    return;
  }
}
