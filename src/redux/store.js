import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { heroesReducer, filterReducer } from './heroes/heroes-reducers';

const store = configureStore({
  reducer: combineReducers({
    heroes: heroesReducer,
    filter: filterReducer,
  }),
});

// eslint-disable-next-line
export default { store };
