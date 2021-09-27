import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import HeroesListItem from './HeroesListItem';
import { getAllHeroes } from '../../redux/heroes/heroes-operations';
import { filteredHerosSelector } from '../../redux/heroes/heroes-selectors';
import { heroesList } from './HeroesList.module.scss';

const HeroesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHeroes());
  }, [dispatch]);

  const allHeroes = useSelector(filteredHerosSelector);

  return (
    <div className={heroesList}>
      {allHeroes.length > 0 &&
        allHeroes.map(hero => <HeroesListItem key={hero._id} hero={hero} />)}
    </div>
  );
};

export default HeroesList;
