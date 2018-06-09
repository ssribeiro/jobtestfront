import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { Day, SampleDayList, generateDays } from '../models/day';
import { Location, InitialLocation } from '../models/location';

@Component({
  selector: 'app-date-list-view',
  template: `
  <div *ngFor="let day of days; let index=day_index;" [style.height]=" !!daySelected ? (daySelected.day == day.day ? '100%' : '0%') : (day.orderFromToday==0 ? '24%' : '19%') ">
    <app-date-page
      [day]="day"
      [index]="day_index"
      [selected]="!!daySelected ? ( daySelected.day == day.day ) : null"
      [location]="location"
    ></app-date-page>
  </div>
  <app-select-location-page></app-select-location-page>
  `,
  styles: [`
    div {
      transition: 0.35s;
    }
  `]
})
export class DateListViewComponent {
  @Input() days:Day[] = generateDays(Date.now()) || SampleDayList;
  @Input() daySelected:Day = null;
  @Input() location:Location = InitialLocation;
  //@Output() ans = new EventEmitter<Ans>();
  constructor() { }
  //putAns(a:Ans) { this.ans.emit(a); }
}
