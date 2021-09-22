import { createReducer } from '@reduxjs/toolkit';
import {
  getAllHeroesSuccess,
  // addHeroesuccess,
  // deleteHeroSuccess,
  // filterHeroes,
} from './heroes-actions';

const initialState = [];

const heroesReducer = createReducer(initialState, {
  [getAllHeroesSuccess]: (_, { payload }) => payload.heroes,
});

export default heroesReducer;
