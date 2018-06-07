import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-view',
  template: `
    <app-scroll-page>
      <app-date-list-page></app-date-list-page>
    </app-scroll-page>
    <app-status-page></app-status-page>
  `,
  styles: [`
  `]
})
export class HomeViewComponent {
  //@Output() ans = new EventEmitter<Ans>();

  constructor() {
  }
  //putAns(a:Ans) { this.ans.emit(a); }
}
