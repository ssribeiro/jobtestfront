import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Screen, InitialScreen } from '../models/screen';

@Component({
  selector: 'app-scroll-view',
  template: `
    <div class="scroolable scroolarea" [ngClass]="{'wide': screen.width >= 600}">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
  .scroolarea {
    position: absolute;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .wide { }
  `]
})
export class ScrollViewComponent {
  @Input() screen:Screen = InitialScreen;
  //@Output() ans = new EventEmitter<Ans>();
  constructor() { }
  //putAns(a:Ans) { this.ans.emit(a); }
}
