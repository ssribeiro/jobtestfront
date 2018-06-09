import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as reducers from '../reducers';
import { Store, select } from '@ngrx/store';

import * as DaysActions from '../actions/days';
import { Day } from '../models/day';
import { Location } from '../models/location';

@Component({
  selector: 'app-date-list-page',
  template: `
    <app-date-list-view
      [days]="days$ | async"
      [daySelected]="daySelected$ | async"
      [location]="location$ | async"
    ></app-date-list-view>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateListPageComponent implements OnInit {

  days$: Observable<Day[]> = this.store.pipe(select(reducers.getDays));
  daySelected$: Observable<Day> = this.store.pipe(select(reducers.getSelectedDay));
  days:Day[] = null;
  location$: Observable<Location> = this.store.pipe(select(reducers.getLocation));

  constructor(private store:Store<reducers.State>) { }

  ngOnInit() {
    this.updateDays();
    this.days$.subscribe( days => {
      this.days = days;
      if(!this.days) setTimeout(this.updateDays.bind(this), 10*1000);
      else if(this.days.length!=5) setTimeout(this.updateDays.bind(this), 10*1000); // retry ater 10 seconds
    });
    setInterval(this.updateDays.bind(this), 1*60*60*1000); // updates in an hour
  }

  updateDays() { this.store.dispatch(new DaysActions.Update()); }

}
