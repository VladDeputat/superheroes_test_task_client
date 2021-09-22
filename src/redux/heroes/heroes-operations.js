import axios from 'axios';

import {
  getAllHeroesRequest,
  getAllHeroesSuccess,
  getAllHeroesError,
  // addHeroRequest,
  // addHeroesuccess,
  // addHeroError,
  // deleteHeroRequest,
  // deleteHeroSuccess,
  // deleteHeroError,
  // filterHeroes,
} from './heroes-actions';

axios.defaults.baseURL = 'http://localhost:4000';

const getAllHeroes = () => dispatch => {
  dispatch(getAllHeroesRequest());
  axios
    .get('/')
    .then(({ data }) => dispatch(getAllHeroesSuccess(data.data)))
    .catch(error => dispatch(getAllHeroesError(error.message)));
};

// export { getAllHeroes, getHero, addHero, updateHero, deleteHero };
export { getAllHeroes };
