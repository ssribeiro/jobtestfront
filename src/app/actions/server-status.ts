import { Action } from '@ngrx/store';

export enum ServerStatusActionTypes {
  SetStatus = '[ServerStatus] Set Status',
}

export class SetStatus implements Action {
  readonly type = ServerStatusActionTypes.SetStatus;
  constructor(public payload:string) {};
}

export type ServerStatusActions = SetStatus;
