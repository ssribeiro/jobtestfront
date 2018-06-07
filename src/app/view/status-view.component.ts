import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-view',
  template: `
    <div [ngClass]="{'revealed':!!status}" class="status">
      <br><br>
      <h2>Ops!<br></h2>
      <h3>We are having issues due to</h3>
      <h4>{{ status }}</h4>
    </div>
  `,
  styles: [`
    .status {
      position: fixed;
      top: 20%;
      left: 5%;
      right: 5%;
      bottom: 20%;
      z-index: 0;
      opacity: 0;
      background-color: darkred;
      text-align: center;
      box-shadow: 0px 0px 19px 2px rgba(0,0,0,0.75);
      transition: 0.35s;
    }
    .revealed {
      z-index: 3000;
      opacity: 1;
    }
  `]
})
export class StatusViewComponent {
  @Input() status:string = null;
  //@Output() ans = new EventEmitter<Ans>();
  constructor() { }
  //putAns(a:Ans) { this.ans.emit(a); }
}
