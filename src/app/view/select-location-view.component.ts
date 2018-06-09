import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Location, InitialLocation, CITY, City } from '../models/location';

@Component({
  selector: 'app-select-location-view',
  template: `
  <div class="select-location">
    <mat-form-field>
      <mat-select placeholder="City" (selectionChange)="onChange($event.value)">
        <mat-option [value]="CITY.NY"> {{ CITY.NY.name }} </mat-option>
        <mat-option [value]="CITY.TK"> {{ CITY.TK.name }} </mat-option>
        <mat-option [value]="CITY.SP"> {{ CITY.SP.name }} </mat-option>
      </mat-select>
    </mat-form-field>
  </div>
  `,
  styles: [`
  .select-location {
    position: absolute;
    top: 0%;
    right: 0%;
    z-index: 100;
  }
  mat-form-field { width: 98px; }
  mat-option { background-color: darkgrey !important; }
  `]
})
export class SelectLocationViewComponent {
  @Input() location:Location = InitialLocation;
  @Output() setCity = new EventEmitter<City>();

  CITY = CITY;
  constructor() { }
  onChange(city:City) { this.setCity.emit(city); }
}
