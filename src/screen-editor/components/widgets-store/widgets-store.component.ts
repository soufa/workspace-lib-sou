import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, merge } from 'rxjs';
import { map } from 'rxjs/operators';

import { WidgetsLibraryModel } from '../../models/widgets-library';
import { Navigator } from '../explorer/navigator/navigator';
import {
  WidgetsLibrairiesState,
  getWidgetsLibrairies
} from '../../core/ngrx/widgets-librairies';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'sc-widgets-store',
  templateUrl: './widgets-store.component.html',
  styleUrls: ['./widgets-store.component.css']
})
export class WidgetsStoreComponent implements OnInit {
/*  widgetsLibrairies$: Observable<WidgetsLibraryModel[]>;
  selectedLibrary$: Observable<WidgetsLibraryModel>;

  screen$: Observable<string>;
  view$: Observable<string>;

  private librairySelectionChanges$: Subject<WidgetsLibraryModel> = new Subject<
    WidgetsLibraryModel
  >();
*/
  constructor(
    /*
    private navigator: Navigator,
    private widgetsLibrairiesManagement: Store<WidgetsLibrairiesState>,
    private screenExplorerManagement: Store<ScreenExplorerState>
    */
  ) {}

 // ngOnInit() {
    // subscribe to the view feature/screen
  /*  this.view$ = this.navigator.view();
    this.screen$ = this.screenExplorerManagement.select(getScreenTemplate);

    this.widgetsLibrairies$ = this.widgetsLibrairiesManagement.select(
      getWidgetsLibrairies
    );
    this.selectedLibrary$ = merge(
      this.widgetsLibrairies$.pipe(
        map(widgetsLibraries => widgetsLibraries && widgetsLibraries[0])
      ),
      this.librairySelectionChanges$.asObservable()
    );*/
  // }
/*
  selectStore(store: WidgetsLibraryModel) {
    this.librairySelectionChanges$.next(store);
  }*/
  items: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'Store Management', routerLink: ['/store'], icon: 'pi pi-fw pi-minus'
      },
      {

        label: 'Template Management',
        items: [
          {label: 'Create Template', routerLink: ['/createTemplate'], icon: 'fas fa-pencil-alt'},
          //  {label: 'Design Space', routerLink: ['/designSpace'],icon: 'fas fa-pencil-alt'},
          {label: 'Search Template', routerLink: ['/searchTemplate'], icon: 'fas fa-search'},
          {label: 'Import Template', routerLink: ['/importTemplate'], icon: 'fas fa-file-import'},
          {label: 'Simulate Template', routerLink: ['/simulateTemplate'], icon: 'fab fa-wpforms'}
        ]

      }

    ];
    this.items = [
      {
        label: 'Store Management',
        icon: 'pi pi-fw pi-minus',
        routerLink: ['/store']
      },
      {
        label: 'Template Management',
        items: [
          {label: 'Create Template', icon: 'pi pi-pencil', routerLink: ['/createTemplate']},
          {label: 'Search Template', icon: 'pi pi-search', routerLink: ['/searchTemplate']},
          {label: 'Import Template', icon: 'pi pi-sign-in', routerLink: ['/importTemplate']},
          {label: 'Simulate Template', icon: 'fab fa-wpforms', routerLink: ['/simulateTemplate']}
        ]
      },
     /* {
        label: 'Help',
        icon: 'fa-question',
        items: [
          {
            label: 'Contents',
            icon: 'fa-bars'
          },
          {
            label: 'Search',
            icon: 'fa-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File',
                icon: 'fa-file',
              }
            ]}
        ]
      },
      {
        label: 'Actions',
        icon: 'fa-gear',
        items: [
          {
            label: 'Edit',
            icon: 'fa-refresh',
            items: [
              {label: 'Save', icon: 'fa-save'},
              {label: 'Update', icon: 'fa-save'},
            ]
          },
          {
            label: 'Other',
            icon: 'fa-phone',
            items: [
              {label: 'Delete', icon: 'fa-minus'}
            ]
          }
        ]
      }*/
    ];
  }
}
