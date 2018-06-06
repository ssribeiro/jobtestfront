import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import * as reducers from '../reducers';
import { Store, select } from '@ngrx/store';

import { Screen, InitialScreen } from '../models/screen';
@Component({
  selector: 'app-debug-screen-page',
  template: `
    <app-debug-screen-view [screen]="screen$ | async"></app-debug-screen-view>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class DebugScreenPageComponent {
  screen$: Observable<Screen> = this.store.pipe(select(reducers.getScreen));

  constructor(private store: Store<reducers.State>) {}

}
