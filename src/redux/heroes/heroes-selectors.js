import { createSelector } from 'reselect';

const allHeroesSelector = state => state.heroes;
const filterSelector = state => state.filter;

const filteredHerosSelector = createSelector(
  [allHeroesSelector, filterSelector],
  (heroes, filter) => {
    const normFilter = filter?.toLowerCase();
    return heroes.filter(({ nickname }) =>
      nickname.toLowerCase().includes(normFilter),
    );
  },
);

export { allHeroesSelector, filteredHerosSelector };
