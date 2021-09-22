import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllHeroes } from '../redux/heroes/heroes-operations';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHeroes());
  }, [dispatch]);

  return (
    <div>
      <h1>Main Page</h1>
    </div>
  );
};

export default MainPage;
