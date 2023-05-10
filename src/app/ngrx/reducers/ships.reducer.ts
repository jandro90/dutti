import { createReducer, on } from '@ngrx/store';
import { ADD_SHIPS } from '../actions/ships.actions';

export const initialState  = [];

export const _shipsReducer = createReducer(
  initialState,
  on(ADD_SHIPS, (state) => state)
);

export function shipsReducer(state, action) {
  return _shipsReducer(state, action);
}