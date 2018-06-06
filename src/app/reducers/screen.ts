import { ScreenActionTypes, ScreenActions } from '../actions/screen';
import { Screen, InitialScreen } from '../models/screen';

export interface State {
  screen: Screen;
}

const initialState: State = {
  screen: InitialScreen
};

export function reducer(
  state: State = initialState,
  action: ScreenActions
): State {
  switch (action.type) {
    case ScreenActionTypes.Update:
      return { screen: action.payload };

    default:
      return state;
  }
}

export const getScreen = (state: State) => state.screen;
