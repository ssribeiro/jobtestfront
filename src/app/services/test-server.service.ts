import { Injectable } from '@angular/core';
import { WebService } from './web.service';

import * as reducers from '../reducers';
import { Store, select } from '@ngrx/store';
import * as ServerStatusActions from '../actions/server-status';

import { environment } from '../../environments/environment';
//import * as Utils from '../shared/utils';
import { errors } from '../shared/errors';

@Injectable({
  providedIn: 'root'
})
export class TestServerService {

  updateStatusTask;

  constructor(
    private web: WebService,
    private store:Store<reducers.State>
  ) { }

  start() {
    this.updateServerStatus();
    this.updateStatusTask = setInterval(
      this.updateServerStatus.bind(this),
      environment.update_server_status_refresh_rate);
  }

  updateServerStatus() {
    this.web.get(environment.api+'/ping').subscribe(
      status => {
        if(status['message']=='pong') this.statusIs();
        else this.statusIs(errors.web.missconfig);
      },
      err => this.statusIs(errors.web.connection)
    );
  }

  statusIs(err=null) { this.store.dispatch(new ServerStatusActions.SetStatus(err)); }

}
