import { useDispatch } from 'react-redux';
import { filterHeroes } from '../../redux/heroes/heroes-actions';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(filterHeroes(e.target.value));
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm}>
        <button type="button" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          name="query"
          type="text"
          autoComplete="off"
          placeholder="Search heroes"
          onChange={onFilterChange}
        />
      </form>
    </header>
  );
}
