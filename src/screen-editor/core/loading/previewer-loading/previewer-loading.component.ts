import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// import { PreviewerState, isLoading } from '../../../components/preview/ngrx';

@Component({
  selector: 'sc-previewer-loading',
  templateUrl: './previewer-loading.component.html',
  styleUrls: ['./previewer-loading.component.css']
})
/**
 * Loader Component to show a spinner when the state's show equals to true
 *
 */
export class PreviewerLoadingComponent implements OnInit {
  loading$: Observable<boolean>;

//  constructor(private previewerManagement: Store<PreviewerState>) {}
  constructor() {
  }
  ngOnInit() {
  //  this.loading$ = this.previewerManagement.select(isLoading);
  }
}
