import { Action } from '@ngrx/store';
import { Day } from '../models/day';

export enum DaysActionTypes {
  Update = '[Days] Update',
  SetDays = '[Days] SetDays',
}

export class Update implements Action {
  readonly type = DaysActionTypes.Update;
}

export class SetDays implements Action {
  readonly type = DaysActionTypes.SetDays;
  constructor(public payload:Day[]) {};
}

export type DaysActions = Update | SetDays;
