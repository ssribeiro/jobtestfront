import { Action } from '@ngrx/store';
import { Day, DayDetails } from '../models/day';
import { Location } from '../models/location';

export enum DaysActionTypes {
  Update = '[Days] Update',
  SetDays = '[Days] Set Days',
  SelectDay = '[Days] Select Day',
  SetDayDetails = '[Days] Set Day Details',
  SetLocation = '[Days] Set Location',
}

export class Update implements Action {
  readonly type = DaysActionTypes.Update;
}

export class SetDays implements Action {
  readonly type = DaysActionTypes.SetDays;
  constructor(public payload:Day[]) {};
}

export class SelectDay implements Action {
  readonly type = DaysActionTypes.SelectDay;
  constructor(public payload:Day) {};
}

export class SetDayDetails implements Action {
  readonly type = DaysActionTypes.SetDayDetails;
  constructor(public payload:DayDetails) {};
}

export class SetLocation implements Action {
  readonly type = DaysActionTypes.SetLocation;
  constructor(public payload:Location) {};
}

export type DaysActions =
  Update |
  SetDays |
  SelectDay |
  SetDayDetails |
  SetLocation ;
