import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import * as reducers from '../reducers';
import { Store, select } from '@ngrx/store';

import * as DaysActions from '../actions/days';

import { Day, SampleDay } from '../models/day';
import { Location, InitialLocation } from '../models/location';

@Component({
  selector: 'app-date-page',
  template: `
    <app-date-view
      [day]=day
      (dayClick)="onDayClick($event)"
      [selected]="selected"
      [location]="location"
    ></app-date-view>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePageComponent {
  //stuff$: Observable<Stuff> = this.store.pipe(select(reducers.getStuff));
  @Input() selected:boolean = false;
  @Input() day:Day = SampleDay;
  @Input() location:Location = InitialLocation;
  constructor(private store:Store<reducers.State>) { }
  onDayClick(day:Day) { this.store.dispatch(new DaysActions.SelectDay(day)); }
}
