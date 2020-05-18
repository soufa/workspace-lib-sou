import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Dialog } from '../../../../../core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'sc-feature-creator',
  templateUrl: './feature-creator.component.html',
  styleUrls: ['./feature-creator.component.scss']
})
export class FeatureCreatorComponent extends Dialog implements OnInit {
  @Output()
  featureAdded = new EventEmitter<string>();
  features;
  feature: string;
  constructor() {
    super();
  }

  ngOnInit() {
   /* this.featuresManagement.select(getFeatures).subscribe(features => {
      this.features = features;
    });*/
  }

  submit(form: NgForm) {
    this.feature = _.lowerFirst(this.feature);
    if (
      form.valid &&
      !Object.keys(this.features).find(name => name === this.feature)
    ) {
      this.featureAdded.emit(this.feature);
     /* this.featuresManagement.dispatch(
        addFeature({
          feature: { name: this.feature, screenscount: 0 }
        })
      );*/
      this.feature = undefined;
    }
  }
}
