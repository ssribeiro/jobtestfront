import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Day, DayDetails } from '../models/day';

@Component({
  selector: 'app-date-details-view',
  template: `
  <div class="header-weathers" [ngClass]="{'visible': daySelected!=null}">
    <h3> WEATHER REPORT </h3>
  </div>
  <div class="top-weathers" [ngClass]="{'visible': daySelected!=null && timelined!=null && timelined.past!=null}">
    <span class="historical"><b> .. 3 hours ago </b></span><br>
    <span class="historical">Temperature: <b>{{ (timelined && timelined.past && timelined.past.temp) ? timelined.past.temp+'°C' : '' }}</b></span><br>
    <span class="historical">Pressure: <b>{{ (timelined && timelined.past && timelined.past.pressure) ? timelined.past.pressure : '' }}</b></span><br>
    <span class="historical">Sea Level: <b>{{ (timelined && timelined.past && timelined.past.sea_level) ? timelined.past.sea_level : '' }}</b></span>
  </div>
  <ng-content></ng-content>
  <div class="just-weathers" [ngClass]="{'visible': daySelected!=null && timelined!=null && timelined.central!=null}">
    <span class="now">Temperature: <b>{{ (timelined && timelined.central && timelined.central.temp) ? timelined.central.temp+'°C' : '' }}</b></span><br>
    <span class="now">Pressure: <b>{{ (timelined && timelined.central && timelined.central.pressure) ? timelined.central.pressure : '' }}</b></span><br>
    <span class="now">Sea Level: <b>{{ (timelined && timelined.central && timelined.central.sea_level) ? timelined.central.sea_level : '' }}</b></span>
  </div>
  <div class="bottom-weathers" [ngClass]="{'visible': daySelected!=null && timelined!=null && timelined.future!=null}">
    <span class="historical"><b> in 3 hours ..  </b></span><br>
    <span class="historical">Temperature: <b>{{ (timelined && timelined.future && timelined.future.temp) ? timelined.future.temp+'°C' : '' }}</b></span><br>
    <span class="historical">Pressure: <b>{{ (timelined && timelined.future && timelined.future.pressure) ? timelined.future.pressure : '' }}</b></span><br>
    <span class="historical">Sea Level: <b>{{ (timelined && timelined.future && timelined.future.sea_level) ? timelined.future.sea_level : '' }}</b></span>
  </div>
  `,
  styles: [`
  div {
    transition: 0.35s;
    opacity: 0;
    z-index: 1;
    visibility: hidden;
  }
  .visible {
    opacity: 1 !important;
    z-index: 70;
    visibility: visible;
  }
  .historical {
    font-size: 12px;
    color: gray;
  }
  .now {
    font-size: 16px;
    color: lightgray;
  }
  .just-weathers {
    position: absolute;
    top: 54%;
    width: 100%;
  }
  .top-weathers {
    position: absolute;
    top: 25%;
    width: 100%;
    z-index: 1;
  }
  .bottom-weathers {
    position: absolute;
    top: 73%;
    width: 100%;
    z-index: 1;
  }
  .header-weathers {
    position: absolute;
    top: 10%;
    width: 100%;
    z-index: 1;
  }
  `]
})
export class DateDetailsViewComponent {
  @Input() daySelected:Day = null;
  @Input() dayDetails:DayDetails = null;
  @Input() timelined:any = null;
  //@Output() ans = new EventEmitter<Ans>();
  constructor() { }
  //putAns(a:Ans) { this.ans.emit(a); }
}
