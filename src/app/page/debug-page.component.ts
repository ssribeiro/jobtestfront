import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-debug-page',
  template: `
    <p>
      debug works!
    </p>
    <a routerLink="screen" >screen</a>
    <router-outlet></router-outlet>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class DebugPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
