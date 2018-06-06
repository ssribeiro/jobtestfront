import { Action } from '@ngrx/store';
import { Screen } from '../models/screen';

export enum ScreenActionTypes {
  Update = '[Screen] Update',
}

export class Update implements Action {
  readonly type = ScreenActionTypes.Update;
  constructor(public payload:Screen) {};
}

export type ScreenActions = Update;
