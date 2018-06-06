import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import * as reducers from '../reducers';
import { Store, select } from '@ngrx/store';
//import * as ThingActions from '../actions/thing.actions';

import { Day, SampleDay } from '../models/day';

@Component({
  selector: 'app-date-page',
  template: `
    <app-date-view
      [day]=day
    ></app-date-view>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePageComponent {
  //stuff$: Observable<Stuff> = this.store.pipe(select(reducers.getStuff));
  @Input() day:Day = SampleDay;
  constructor(private store:Store<reducers.State>) { }
  //onGot($event: Thing) { this.store.dispatch(new ThingActions.Action($event)); }
}
