import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteHero } from '../../redux/heroes/heroes-operations';
import styles from './HeroesList.module.scss';

const HeroesListItem = ({ hero }) => {
  const dispatch = useDispatch();
  const onDelete = e => {
    dispatch(deleteHero(e.target.id));
  };

  return (
    <div className={styles.heroCard}>
      <div className={styles.imgBox}>
        <img src={hero.image} alt={hero.nickname} />
      </div>
      <div className={styles.HeroName}>
        <p>{hero.nickname}</p>
        <button
          type="button"
          className={styles.deleteBtn}
          id={hero._id}
          onClick={onDelete}
        ></button>
      </div>
    </div>
  );
};

export default HeroesListItem;
