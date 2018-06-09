import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import * as reducers from '../reducers';
import { Store, select } from '@ngrx/store';

import * as DaysActions from '../actions/days';

import { Location, InitialLocation, City } from '../models/location';

@Component({
  selector: 'app-select-location-page',
  template: `
    <app-select-location-view
    [location]="location$ | async"
    (setCity)="onSetCity($event)"
    ></app-select-location-view>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectLocationPageComponent {
  location$: Observable<Location> = this.store.pipe(select(reducers.getLocation));
  location:Location = InitialLocation;

  constructor(private store:Store<reducers.State>) { }

  ngOnInit() {
    this.location$.subscribe(location=>this.location = location);
  }

  onSetCity(city: City) {
    const location = Object.assign({}, this.location, { city });
    this.store.dispatch(new DaysActions.SetLocation(location));
  }

}
