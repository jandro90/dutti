import { Ships } from "../interfaces/ships.interface";
import { shipsReducer } from "./reducers/ships.reducer";

export interface APP_STORE  {
    ships: (state: any, action: any) => Ships[];
}

export const APP_STORE: APP_STORE = {
    ships: shipsReducer
}