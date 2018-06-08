import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Day, SampleDay, DayMethods } from '../models/day';

@Component({
  selector: 'app-date-view',
  template: `
    <div class="daybox" (click)="dayClick.emit(day)" [ngClass]="{'today': day.orderFromToday==0, 'after-today': day.orderFromToday>0, 'day-hidden': selected!=null && !selected}">
      <div class="dayinfo bold">
        <table>
          <tr>
            <td class="day-number-week">
              <span class="week-short">{{ dayMethods.getWeekShort(day).toUpperCase() }}</span>
              <br>
              <span class="day-number">{{ day.day | numberpad }}</span>
            </td>
            <td class="day-name">{{ dayMethods.getName(day).toUpperCase() }}</td>
            <td class="day-bar">
              <div class="bar" [style.left]=" '' + (100 - (day.relativeHumidity ? day.relativeHumidity.ny : 0)) + '%' "></div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `,
  styles: [`
  table { width: 100%; }
  .daybox {
    text-align: center;
    position: relative;
    margin: 0;
    padding: 0;
    background: #767a83;
    color: #bcb9b6;
    z-index: 3;
    opacity: 1;
    height: 100%;
    transition: 0.35s;
  }
  .today { color: white; background-color: #293b62; }
  .after-today { color: #fffae8; background-color: #70bcc4; }
  .dayinfo {
    text-align: center;
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  .day-number-week { width: 22%; }
  .week-short { font-size: 8px; }
  .day-number { font-size: 19px; }
  .day-name { text-align: left; padding-left: 12%; font-size: 18px; }
  .day-bar { width: 25%; transform: translate(2px); transition: 0.35s;}
  .bar {
    width: auto;
    height: 16px;
    background-color: white;
    right: 0;
    position: absolute;
    top: 28%;
    opacity: 0.6;
    left: 100%;
   }
   .day-hidden {
     opacity: 0 !important;
   }
  `]
})
export class DateViewComponent {
  @Input() selected:boolean = null;
  @Input() day:Day = SampleDay;
  @Output() dayClick = new EventEmitter<Day>();

  dayMethods = DayMethods;
  constructor() { }
  //putAns(a:Ans) { this.ans.emit(a); }
}
