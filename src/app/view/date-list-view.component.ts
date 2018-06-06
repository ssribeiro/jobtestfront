import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Day, InitialDay, SampleDayList, generateDays } from '../models/day';

@Component({
  selector: 'app-date-list-view',
  template: `
  <div *ngFor="let day of days; let index=day_index;" [style.height]="day.orderFromToday==0 ? '24%' : '19%'">
    <app-date-page
      [day]="day"
      [index]="day_index"
    ></app-date-page>
  </div>
  `,
  styles: [`
  `]
})
export class DateListViewComponent {
  @Input() days:Day[] = generateDays(Date.now()) || SampleDayList;
  //@Output() ans = new EventEmitter<Ans>();
  constructor() { }
  //putAns(a:Ans) { this.ans.emit(a); }
}
