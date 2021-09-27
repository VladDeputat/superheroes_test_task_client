import React, { useState } from 'react';
import CreateHeroBtn from '../components/CreateHeroBtn/CreateHeroBtn';
import HeroesList from '../components/HeroesList/HeroesList';
import CreateHeroModal from '../components/modals/CreateHeroModal/CreateHeroModal';
import SearchBar from '../components/SearchBar/SearchBar';

const MainPage = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      <SearchBar />
      <CreateHeroBtn setisModalOpen={setisModalOpen} />
      {isModalOpen && <CreateHeroModal setisModalOpen={setisModalOpen} />}
      <HeroesList />
    </>
  );
};

export default MainPage;
