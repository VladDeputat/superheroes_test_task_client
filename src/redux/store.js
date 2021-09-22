import { configureStore, combineReducers } from '@reduxjs/toolkit';
import heroesReducer from './heroes/heroes-reducers';

const store = configureStore({
  reducer: combineReducers({
    heroes: heroesReducer,
  }),
});

// eslint-disable-next-line
export default { store };
