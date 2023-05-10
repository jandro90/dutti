import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ShipsService } from 'src/app/services/ships/ships.service';
import { ADD_SHIPS, LOAD_SHIPS } from '../actions/ships.actions';
import { Ships } from 'src/app/interfaces/ships.interface';

@Injectable()
export class ShipsEffects {

  constructor(
    private actions$: Actions,
    private shipsService: ShipsService
  ) {}

  loadShips$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_SHIPS),
    mergeMap(() => this.shipsService.getShips()
      .pipe(
        map((payload: Ships[]) => ADD_SHIPS({payload})),
        catchError(() => EMPTY)
      ))
    )
  );
}