import { createReducer, on } from '@ngrx/store';
import { ADD_SHIPS } from '../actions/ships.actions';
import { Ships } from 'src/app/interfaces/ships.interface';

export const initialState: Ships[]  = [];

export const _shipsReducer = createReducer(
  initialState,
  on(ADD_SHIPS, (state: Ships[], action) => {
    state = [...state, ...action.payload]
    return state
  })
);

export function shipsReducer(state, action) {
  return _shipsReducer(state, action);
}