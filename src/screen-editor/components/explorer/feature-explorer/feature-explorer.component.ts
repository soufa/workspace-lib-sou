import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ConfirmationService } from 'primeng/api';

import { Feature, Screen } from '@palmyra-devkit/core-api/shared';

import { UiTreeNode } from '../../../models/tree-node';
import { NodeType } from '../../../models/node-type';



@Component({
  selector: 'sc-feature-explorer',
  templateUrl: './feature-explorer.component.html',
  styleUrls: ['./feature-explorer.component.scss']
})
export class FeatureExplorerComponent implements OnInit {
  featuresTreeNodes: UiTreeNode[];
  selectedNode: UiTreeNode;

  featuresTreeNodes$: Observable<UiTreeNode[]>;

  constructor(
    private confirmationService: ConfirmationService,
   // private featuresManagement: Store<FeaturesState>
  ) {}

 /* ngOnInit() {
    this.featuresTreeNodes$ = this.featuresManagement
      .select(getFeaturesToDisplay)
      .pipe(
        filter(Boolean),
        map((featuresState: FeatureState[]) =>
          featuresState.map(featureState =>
            this.getFeatureTreeNode(featureState, featureState.expaneded)
          )
        )
      );
  }*/
ngOnInit() {}
 /*expandFeatureNode(featureNode: UiTreeNode): void {
    if (!featureNode.children) {
      this.featuresManagement.dispatch(
        loadFeature({ featureName: featureNode.label })
      );
    } else {
      this.featuresManagement.dispatch(
        toggleFeature({ featureName: featureNode.label })
      );
    }
  }
*/
 /* collapseFeatureNode(featureNode: UiTreeNode) {
    this.featuresManagement.dispatch(
      toggleFeature({ featureName: featureNode.label })
    );
  }*/

  /**
   * Used to edit a screen
   * Fired when clicking the edit screen button
   * @param UiTreeNode node - Screen to edit
   */
  /*editFeatureScreen(treeNode: UiTreeNode) {
    this.featuresManagement.dispatch(
      exploreScreen({
        featureName: treeNode.parent.label,
        screenName: treeNode.label
      })
    );
  }*/

  /**
   * Open addScreenDialog
   * @param featureNode - Feature node.
   */
 /* openAddScreensDialog(featureNode: UiTreeNode) {
    if (!featureNode.children) {
      this.featuresManagement.dispatch(
        loadFeature({ featureName: featureNode.label })
      );
    }
    this.featuresManagement.dispatch(
      openDialogToAddScreen({ featureName: featureNode.label })
    );
  }/*

  /**
   * Clone a screen
   * @param screenNode node to be cloned
   */
  /*openCloneScreenDialo(screenNode: UiTreeNode): void {
    this.featuresManagement.dispatch(
      openDialogToCloneScreen({
        featureName: screenNode.parent.label,
        screenName: screenNode.label
      })
    );
  }*/

  /*preview(treeNode: UiTreeNode) {
    this.featuresManagement.dispatch(
      previewScreen({
        featureName: treeNode.parent.label,
        screenName: treeNode.label
      })
    );
  }*/

  /**
   * Delete a screen
   * @param node - node to delete
   */
 /* deleteScreen(screenNode: UiTreeNode) {
    const icon = 'fa fa-trash';
    const header = 'Confirmation';
    const message = `Do you want to delete "${screenNode.label}" screen?`;
    this.featuresManagement.dispatch(
      deleteScreenFromFeature({
        featureName: screenNode.parent.label,
        screenName: screenNode.label
      })
    );
    this.confirmationService.confirm({
      message,
      header,
      icon,
      accept: () => {
        [
          confirmDeleteScreenFromFeature({
            featureName: screenNode.parent.label,
            screenName: screenNode.label
          }),
          applyFeatureUpdates({ featureName: screenNode.parent.label })
        ].forEach(action => this.featuresManagement.dispatch(action));
      },
      reject: () => {
        this.featuresManagement.dispatch(
          cancelDeleteScreenFromFeature({
            featureName: screenNode.parent.label,
            screenName: screenNode.label
          })
        );
      }
    });
  }*/

  /**
   * Delete a feature node.
   * @param featureNode - Feature node.
   */
  /*deleteFeature(featureNode: UiTreeNode) {
    const icon = 'fa fa-trash';
    const header = 'Confirmation';
    const message = `Do you want to delete "${featureNode.label}" feature?`;
    this.featuresManagement.dispatch(
      deleteFeature({
        featureName: featureNode.label
      })
    );
    this.confirmationService.confirm({
      message,
      header,
      icon,
      accept: () => {
        this.featuresManagement.dispatch(
          confirmDeleteFeature({
            featureName: featureNode.label
          })
        );
      },
      reject: () => {
        this.featuresManagement.dispatch(
          cancelDeleteFeature({
            featureName: featureNode.label
          })
        );
      }
    });
  }*/

 /* private getFeatureTreeNode(
    feature: FeatureState,
    expanded?: boolean
  ): UiTreeNode {
    let screensUiNode: UiTreeNode[];
    if (feature.screensState) {
      screensUiNode = Object.keys(feature.screensState)
        .filter(
          key =>
            !feature.screensState[key].toBeAdded &&
            !feature.screensState[key].inTrash
        )
        .map(key => this.createScreenUiNode(key, feature.screensState[key]));
    }
    return {
      label: feature.data.name,
      expandedIcon: 'fa fa-folder-open',
      collapsedIcon: 'fa fa-folder',
      leaf: false,
      children: screensUiNode,
      type: NodeType.FEATURE,
      count: feature.screensCount,
      expanded,
      updated: feature.isUpdated
    };
  }
  private createScreenUiNode(label: string, screen: ScreenState) {
    return {
      label,
      // expandedIcon: screen.model ? 'fas fa-link' : 'fas fa-unlink',
      // collapsedIcon: screen.model ? 'fas fa-link' : 'fas fa-unlink',
      type: NodeType.SCREEN,
      updated: screen.isNew || screen.isUpdated,
      linked: screen.modelName
    };
  }*/
}
