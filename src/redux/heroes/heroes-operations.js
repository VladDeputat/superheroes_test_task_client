import axios from 'axios';

import {
  getAllHeroesRequest,
  getAllHeroesSuccess,
  getAllHeroesError,
  addHeroRequest,
  addHeroSuccess,
  addHeroError,
  deleteHeroRequest,
  deleteHeroSuccess,
  deleteHeroError,
} from './heroes-actions';

axios.defaults.baseURL = 'http://localhost:4000';

const getAllHeroes = () => dispatch => {
  dispatch(getAllHeroesRequest());
  axios
    .get('/')
    .then(({ data }) => dispatch(getAllHeroesSuccess(data.data)))
    .catch(error => dispatch(getAllHeroesError(error.message)));
};

const addHero = data => dispatch => {
  dispatch(addHeroRequest());
  axios
    .post('/', data)
    .then(res => dispatch(addHeroSuccess(res.data)))
    .catch(error => dispatch(addHeroError(error.message)));
};

const deleteHero = id => dispatch => {
  dispatch(deleteHeroRequest());
  axios
    .delete(`/${id}`)
    .then(() => dispatch(deleteHeroSuccess(id)))
    .catch(error => dispatch(deleteHeroError(error.message)));
};

// export { getAllHeroes, addHero, updateHero, deleteHero };
export { getAllHeroes, addHero, deleteHero };
