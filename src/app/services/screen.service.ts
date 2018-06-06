import { Injectable, NgZone } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Screen, InitialScreen } from '../models/screen';
import { Store } from '@ngrx/store';
import * as fromScreen from '../reducers/screen';
import * as screenActions from '../actions/screen';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  screen: Screen = InitialScreen;

  constructor(
    private deviceService: DeviceDetectorService,
    private ngzone:NgZone,
    private store:Store<fromScreen.State>
  ) { }

  start() {
    this.updateDeviceInfo();
    this.subscribeToScreenChanges();
    this.sendScreenReport();
  }

  updateDeviceInfo() {
    const deviceInfo = this.deviceService.getDeviceInfo();
    this.screen = Object.assign({}, this.screen, {
      device: (deviceInfo.device=='unknown' || !deviceInfo.device) ? (deviceInfo.os=='unknown' || !deviceInfo.os) ? null : deviceInfo.os : deviceInfo.device,
      browser: (deviceInfo.browser=='unknown' || !deviceInfo.browser) ? null : deviceInfo.browser
    });
  }

  sendScreenReport() {
    this.store.dispatch(new screenActions.Update(this.screen));
  }

  subscribeToScreenChanges() {
    this.resize();
  	window.onresize = (e) => this.resize();
  }

  resize() {
  	this.ngzone.run(() => {
      this.screen = Object.assign({}, this.screen, {
        width: window.innerWidth,
        height: window.innerHeight,
        orientation: window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'
      });
  		this.sendScreenReport();
    });
  }

}
