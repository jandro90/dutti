import { createAction, props } from '@ngrx/store';

import { Ships } from 'src/app/interfaces/ships.interface';

export const LOAD_SHIPS = '[LOAD_SHIPS] SHIPS';

export const ADD_SHIPS =  createAction(
    '[ADD_SHIPS] SHIPS',
    props<{ payload: Ships[] }>()
  );