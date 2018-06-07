import { ServerStatusActionTypes, ServerStatusActions } from '../actions/server-status';

export interface State {
  status: string;
}

const initialState: State = {
  status: null
};

export function reducer(
  state: State = initialState,
  action: ServerStatusActions
): State {
  switch (action.type) {
    case ServerStatusActionTypes.SetStatus:
      return { status: action.payload };

    default:
      return state;
  }
}

export const getServerStatus = (state: State) => state.status;
