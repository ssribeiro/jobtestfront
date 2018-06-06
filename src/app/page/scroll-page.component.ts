import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import * as reducers from '../reducers';
import { Store, select } from '@ngrx/store';
//import * as ThingActions from '../actions/thing.actions';
import { Screen } from '../models/screen';

@Component({
  selector: 'app-scroll-page',
  template: `
    <app-scroll-view
      [screen]="screen$ | async"
    >
    <ng-content></ng-content>
    </app-scroll-view>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollPageComponent {
  screen$: Observable<Screen> = this.store.pipe(select(reducers.getScreen));
  constructor(private store:Store<reducers.State>) { }
  //onGot($event: Thing) { this.store.dispatch(new ThingActions.Action($event)); }
}
