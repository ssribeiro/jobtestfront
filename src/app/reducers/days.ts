import { DaysActionTypes, DaysActions } from '../actions/days';
import { Day } from '../models/day';

export interface State {
  days:Day[];
}

const initialState: State = {
  days: null
};

export function reducer(
  state: State = initialState,
  action: DaysActions
): State {
  switch (action.type) {
    case DaysActionTypes.SetDays:
      return { days: action.payload };

    default:
      return state;
  }
}

export const getDays = (state: State) => state.days;
