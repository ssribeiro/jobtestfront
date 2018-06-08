import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import * as reducers from '../reducers';
import { Store, select } from '@ngrx/store';

import * as DaysActions from '../actions/days';
import { Day } from '../models/day';

@Component({
  selector: 'app-date-list-page',
  template: `
    <app-date-list-view
      [days]="days$ | async"
    ></app-date-list-view>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateListPageComponent implements OnInit, OnDestroy {

  days$: Observable<Day[]> = this.store.pipe(select(reducers.getDays));
  days:Day[] = null;
  taskUpdateDays;

  constructor(private store:Store<reducers.State>) { }

  ngOnInit() {
    this.days$.subscribe(days => this.days = days);
    this.keepDaysUpdated();
  }

  keepDaysUpdated() {
    this.updateDays();
    this.taskUpdateDays = setInterval(this.updateDays.bind(this), 10*1000);
  }

  updateDays() {
    this.store.dispatch(new DaysActions.Update());
  }

  ngOnDestroy() {
    if(this.taskUpdateDays)
      this.taskUpdateDays.unsubscribe();
    this.taskUpdateDays = null;
  }
}
