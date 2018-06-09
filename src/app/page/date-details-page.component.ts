import { Component, ChangeDetectionStrategy, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import * as reducers from '../reducers';
import { Store, select } from '@ngrx/store';
//import * as ThingActions from '../actions/thing.actions';

import { Day, DayDetails } from '../models/day';
import { Location, InitialLocation } from '../models/location';

@Component({
  selector: 'app-date-details-page',
  template: `
    <app-date-details-view
      [dayDetails]="dayDetails$ | async"
      [daySelected]="daySelected$ | async"
      [timelined]="timelined$ | async"
    >
      <ng-content></ng-content>
    </app-date-details-view>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateDetailsPageComponent implements OnInit {

  dayDetails$: Observable<DayDetails> = this.store.pipe(select(reducers.getDayDetails));
  daySelected$: Observable<Day> = this.store.pipe(select(reducers.getSelectedDay));
  location$: Observable<Location> = this.store.pipe(select(reducers.getLocation));
  location: Location = InitialLocation;

  timelined$ = new EventEmitter<any>();

  constructor(private store:Store<reducers.State>) { }

  ngOnInit() {
    this.location$.subscribe(location=>this.location = location);
    this.dayDetails$.subscribe(details=>{
      let timelined = this.bulkExtractWeather(details);
      this.timelined$.emit(timelined);
    });
  }

  parseWeather(weather) {
    let parsed = {
      temp: null,
      pressure: null,
      sea_level: null,
    };
    if(weather) {
      parsed.temp = weather.main_information.temp ? Number(weather.main_information.temp-273).toFixed(2) : null;
      parsed.pressure = parseFloat(weather.main_information.pressure).toFixed(2) || null;
      parsed.sea_level = parseFloat(weather.main_information.sea_level).toFixed(2) || null;
    } else {
      parsed = null;
    }
    return parsed;
  }

  bulkExtractWeather(details:DayDetails) {
    if(!details) return null;
    if(!details.weather) return null;
    if(!details.weather[this.location.city.id]) return null;
    if(details.weather[this.location.city.id].length==0) return null;

    let timelined = this.getTimelined(details.weather[this.location.city.id]);

    timelined.past = this.parseWeather(timelined.past);
    timelined.central = this.parseWeather(timelined.central);
    timelined.future = this.parseWeather(timelined.future);
    return timelined.central == null ? null : timelined;
  }

  getTimelined(weather_details) {
    let now = Date.now();

    let past = null;
    let central = weather_details[0];
    let future = null;

    let diff = 1000*60*60*24;

    weather_details.forEach((weather, index)=>{
      if( weather.time_stamp-now < diff ) {
        diff = weather.time_stamp - now;
        central = weather;
        if(index>0) past = weather_details[index-1];
        if(index<(weather_details.length-1)) future = weather_details[index+1];
      }
    });
    if(diff>1000*60*60*12) {
      past = null;
      future = null;
    }
    return {past, central, future}
  }
  //onGot($event: Thing) { this.store.dispatch(new ThingActions.Action($event)); }
}
