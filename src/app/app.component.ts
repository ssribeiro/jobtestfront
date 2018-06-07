import { Component, OnInit } from '@angular/core';

/*
Workers
*/
import { ScreenService } from './services/screen.service';
import { TestServerService } from './services/test-server.service';

@Component({
  selector: 'app-root',
  template: `
<div class="default-primary-color text-primary-color default-font allscreen">
  <router-outlet></router-outlet>
</div>
  `,
  styles: [`
`]
})
export class AppComponent implements OnInit {

  constructor(
    private screenService: ScreenService,
    private testServerService: TestServerService,
  ) { }

  ngOnInit() {
    this.screenService.start();
    this.testServerService.start();
  }

}
