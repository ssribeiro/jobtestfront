import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import * as reducers from '../reducers';
import { Store, select } from '@ngrx/store';
//import * as ThingActions from '../actions/thing.actions';

@Component({
  selector: 'app-date-list-page',
  template: `
    <app-date-list-view
    ></app-date-list-view>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateListPageComponent {
  //stuff$: Observable<Stuff> = this.store.pipe(select(reducers.getStuff));
  constructor(private store:Store<reducers.State>) { }
  //onGot($event: Thing) { this.store.dispatch(new ThingActions.Action($event)); }
}
