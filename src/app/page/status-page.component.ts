import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import * as reducers from '../reducers';
import { Store, select } from '@ngrx/store';
//import * as ThingActions from '../actions/thing.actions';

@Component({
  selector: 'app-status-page',
  template: `
    <app-status-view
      [status]="status$ | async"
    ></app-status-view>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusPageComponent {
  status$: Observable<string> = this.store.pipe(select(reducers.getServerStatus));
  constructor(private store:Store<reducers.State>) { }
  //onGot($event: Thing) { this.store.dispatch(new ThingActions.Action($event)); }
}
