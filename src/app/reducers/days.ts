import { DaysActionTypes, DaysActions } from '../actions/days';
import { Day, DayDetails } from '../models/day';
import { Location, InitialLocation } from '../models/location';

export interface State {
  days:Day[];
  selected_day:Day;
  day_details:DayDetails;
  location:Location;
}

const initialState: State = {
  days: null,
  selected_day: null,
  day_details: null,
  location: InitialLocation,
};

export function reducer(
  state: State = initialState,
  action: DaysActions
): State {
  switch (action.type) {
    case DaysActionTypes.SetDays:
      return Object.assign({}, state, { days: action.payload });

    case DaysActionTypes.SelectDay:
      const selected_day = !!state.selected_day ? null : action.payload;
      return Object.assign({}, state, { selected_day });

    case DaysActionTypes.SetDayDetails:
      return Object.assign({}, state, { day_details: action.payload });

    case DaysActionTypes.SetLocation:
      return Object.assign({}, state, { location: action.payload });

    default:
      return state;
  }
}

export const getDays = (state: State) => state.days;
export const getSelectedDay = (state: State) => state.selected_day;
export const getDayDetails = (state: State) => state.day_details;
export const getLocation = (state: State) => state.location;
