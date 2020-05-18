import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { TreeDragDropService } from 'primeng/api';

import { WorkspaceClientApi } from '@palmyra-devkit/core-api/client';
import { Screen } from '@palmyra-devkit/core-api/shared';

import { UiTreeNode } from '../../../models';

@Component({
  selector: 'sc-screens-store',
  templateUrl: './screens-store.component.html',
  styleUrls: ['./screens-store.component.css']
})
export class ScreensStoreComponent implements OnInit {
  screens$: Observable<Array<any>>;
  selectedScreen: Screen;

  constructor(
    private workspaceService: WorkspaceClientApi,
    private treeDragDropService: TreeDragDropService
  ) {}

  ngOnInit() {
    this.screens$ = this.workspaceService.getAllScreens().pipe(
      filter(Boolean),
      map((screens: Screen[]) => {
        return screens.map(screen => {
          return { label: screen.title || screen.name, value: screen };
        });
      })
    );
  }

  /**
   * Init the screen treeNode when start dragging
   * @param screen - Screen
   */
  startDragScreen(screen: Screen, event) {
    const screenDnDNode: UiTreeNode = this.initDraggableScreenNode(screen);
    event.dataTransfer.setData('dragNode', JSON.stringify(screenDnDNode));
    this.treeDragDropService.startDrag({
      tree: null,
      node: screenDnDNode,
      subNodes: [screenDnDNode],
      scope: 'menu'
    });
  }

  /**
   * Init the screen node.
   * @param screen the screen
   */
  private initDraggableScreenNode(screen: Screen): UiTreeNode {
    return undefined;
  }
}
