import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { asyncScheduler, empty, Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  skip,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

import { DaysService } from '../services/days.service';

import {
  DaysActionTypes,
  Update,
  SetDays,
  SelectDay,
  SetDayDetails,
  //UpdateError,
} from '../actions/days';
import { Day, DayDetails } from '../models/day';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class DayEffects {
  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType<Update>(DaysActionTypes.Update),
    debounceTime(300, asyncScheduler),
    switchMap(action => {

      const nextUpdate$ = this.actions$.pipe(
        ofType(DaysActionTypes.Update),
        skip(1)
      );

      return this.daysService
        .list()
        .pipe(
          takeUntil(nextUpdate$),
          map((days: Day[]) => new SetDays(days)),
          catchError(err => empty())
          //catchError(err => of(new SearchError(err)))
        );
    })
  );

  @Effect()
  selectDay$: Observable<Action> = this.actions$.pipe(
    ofType<SelectDay>(DaysActionTypes.SelectDay),
    debounceTime(300, asyncScheduler),
    map(action => action.payload),
    switchMap(day => {

      const next$ = this.actions$.pipe(
        ofType(DaysActionTypes.SelectDay),
        skip(1)
      );

      return this.daysService
        .get(day) // the day we need
        .pipe(
          takeUntil(next$),
          map((dayDetails: DayDetails) => new SetDayDetails(dayDetails)),
          catchError(err => empty())
          //catchError(err => of(new SearchError(err)))
        );
    })
  );

  constructor(
    private actions$: Actions,
    private daysService: DaysService
  ) {}
}
