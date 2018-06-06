import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Day, SampleDay } from '../models/day';

@Component({
  selector: 'app-date-view',
  template: `
    <div class="daybox" (click)="dayClick.emit(day)" [ngClass]="{'today': day.orderFromToday==0, 'after-today': day.orderFromToday>0}">
      <div class="dayinfo bold">
        <table>
          <tr>
            <td class="day-month"></td>
            <td class="day-name"></td>
            <td class="day-bar"></td>
          </tr>
        </table>
      </div>
    </div>
  `,
  styles: [`
  .daybox {
    text-align: center;
    position: relative;
    margin: 0;
    padding: 0;
    background: #767a83;
    color: #bcb9b6;
    height: 100%;
  }
  .today {
    color: white;
    background-color: #293b62;
  }
  .after-today {
    color: #fffae8;
    background-color: #70bcc4;
  }
  .dayinfo {
    text-align: center;
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  `]
})
export class DateViewComponent {
  @Input() day:Day = SampleDay;
  @Output() dayClick = new EventEmitter<Day>();
  constructor() { }
  //putAns(a:Ans) { this.ans.emit(a); }
  textInfo():string {
    switch(this.day.orderFromToday) {
       case 0: {
          return 'today';
          break;
       }
       case -1: {
          return 'yesterday';
          break;
       }
       case 1: {
          return 'tomorrow';
          break;
       }
       default: {
          return this.day.weekday;
          break;
       }
    }
  }
}
