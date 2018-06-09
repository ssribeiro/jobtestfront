import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple-view',
  template: `
    <div class="container">
      <app-date-list-page class="firstlist"></app-date-list-page>
      <app-date-list-page class="secondlist"></app-date-list-page>
    </div>
  `,
  styles: [`
    .container {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: black;
    }
    .firstlist {
      position: fixed;
      top: 15%;
      left: 15%;
      bottom: 15%;
      right: 55%;
    }
    .secondlist {
      position: fixed;
      top: 15%;
      left: 55%;
      bottom: 15%;
      right: 15%;
    }
  `]
})
export class MultipleViewComponent {
  //@Input() stuff:Stuff = InitialStuff;
  //@Output() ans = new EventEmitter<Ans>();
  constructor() { }
  //putAns(a:Ans) { this.ans.emit(a); }
}
