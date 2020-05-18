import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  Input
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'sc-toolbar-finder',
  templateUrl: './toolbar-finder.component.html',
  styleUrls: ['./toolbar-finder.component.css']
})
export class ToolbarFinderComponent implements OnInit, OnDestroy {
  private filterInput$: Subject<string> = new Subject<string>();
  private subscription: Subscription;
  @Output()
  filter: EventEmitter<string> = new EventEmitter<string>();

  @Input() placeHolder: string;

  ngOnInit() {
    this.subscription = this.filterInput$
      .asObservable()
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.filter.emit(value);
      });
  }
  doFilter(event: KeyboardEvent) {
    this.filterInput$.next(event.target['value']);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
