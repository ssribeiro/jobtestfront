import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from '../shared/utils';

/*
for dev
*/
import { storeFreeze } from 'ngrx-store-freeze';

/*
the reducers font
*/
import * as fromLayout from './layout';
import * as fromScreen from './screen';

/*
states
*/
export interface State {
  layout: fromLayout.State;
  screen: fromScreen.State;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

/*
Reducers
*/
export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  screen: fromScreen.reducer,
  router: fromRouter.routerReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

/*
getStaters and getSelectors
*/
export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');
export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);


export const getScreenState = createFeatureSelector<fromScreen.State>('screen');
export const getScreen = createSelector(getScreenState, fromScreen.getScreen);
