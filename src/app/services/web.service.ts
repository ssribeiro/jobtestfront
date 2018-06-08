import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as reducers from '../reducers';
import { Store, select } from '@ngrx/store';

import { environment } from '../../environments/environment';

@Injectable()
export class WebService implements OnDestroy {

	//token$:Observable<string> = this.store.pipe(select(reducers.getToken));
	//token:string;
	//sub;

  constructor(
		private store:Store<reducers.State>,
		private http: HttpClient,
	) {
  	/*
  	this.sub = this.token$.subscribe(token=>{
  		this.token = token;
  	});
		*/
  }

  ngOnDestroy() {
    /*if(this.sub)
      this.sub.unsubscribe();*/
  }

  ops(type:string = null){
    let headers = this.authHeaders(new HttpHeaders());
    switch (type) {
      case "form":
        headers = this.formHeaders(headers);
        break;
      default:
        headers = this.jsonHeaders(headers);
        break;
    }
    return { headers };
  }

  authHeaders(headers:HttpHeaders):HttpHeaders {
    //if(this.token!=null)
      //headers.append('Authorization', 'Bearer '+this.token);
    return headers;
  }

  jsonHeaders(headers:HttpHeaders):HttpHeaders {
    //headers = this.appendOrigin(headers);
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  formHeaders(headers:HttpHeaders):HttpHeaders {
    //headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers.append('Accept', 'application/json');
    return headers;
  }

	get(address:string) { return this.http.get(environment.api+address, this.ops()); }
	post(address:string, obj:any={}) { return this.http.post(environment.api+address, obj, this.ops()); }
	put(address:string, obj:any={}) { return this.http.put(environment.api+address, obj, this.ops()); }
	delete(address:string) { return this.http.get(environment.api+address, this.ops()); }

}
