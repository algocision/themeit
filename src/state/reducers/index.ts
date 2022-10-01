import { combineReducers } from 'redux';
import RootReducer from './RootReducer';

export const rootReducer = combineReducers({
  rootState: RootReducer,
});

export type rootState = ReturnType<typeof rootReducer>;
