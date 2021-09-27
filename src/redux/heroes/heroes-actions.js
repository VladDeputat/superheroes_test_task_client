import { createAction } from '@reduxjs/toolkit';

const getAllHeroesRequest = createAction('heroes/getAllHeroesRequest');
const getAllHeroesSuccess = createAction('heroes/getAllHeroesSuccess');
const getAllHeroesError = createAction('heroes/getAllHeroesError');

const addHeroRequest = createAction('heroes/addHeroRequest');
const addHeroSuccess = createAction('heroes/addHeroSuccess');
const addHeroError = createAction('heroes/addHeroError');

const deleteHeroRequest = createAction('heroes/deleteHeroRequest');
const deleteHeroSuccess = createAction('heroes/deleteHeroSuccess');
const deleteHeroError = createAction('heroes/deleteHeroError');

const filterHeroes = createAction('heroes/filterHeroes');

export {
  getAllHeroesRequest,
  getAllHeroesSuccess,
  getAllHeroesError,
  addHeroRequest,
  addHeroSuccess,
  addHeroError,
  deleteHeroRequest,
  deleteHeroSuccess,
  deleteHeroError,
  filterHeroes,
};
