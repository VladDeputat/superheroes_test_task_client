import React from 'react';
import styles from './CreateHeroBtn.module.scss';

const CreateHeroBtn = ({ setisModalOpen }) => {
  return (
    <div>
      <h1 className={styles.mainHeading}>Your Heroes</h1>
      <button
        className={styles.createHeroBtn}
        type="button"
        onClick={() => setisModalOpen(true)}
      >
        Create Hero
      </button>
    </div>
  );
};

export default CreateHeroBtn;
