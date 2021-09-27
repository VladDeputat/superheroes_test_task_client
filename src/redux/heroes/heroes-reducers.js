import { createReducer } from '@reduxjs/toolkit';
import {
  getAllHeroesSuccess,
  addHeroSuccess,
  deleteHeroSuccess,
  filterHeroes,
} from './heroes-actions';

const initialState = [];

const heroesReducer = createReducer(initialState, {
  [getAllHeroesSuccess]: (_, { payload }) => payload.heroes,
  [addHeroSuccess]: (state, action) => [
    ...state,
    action.payload.data.createdHero,
  ],
  [deleteHeroSuccess]: (state, action) =>
    state.filter(hero => hero._id !== action.payload),
});

const filterReducer = createReducer('', {
  [filterHeroes]: (_, { payload }) => payload,
});

export { heroesReducer, filterReducer };
