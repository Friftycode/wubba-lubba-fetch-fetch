import { useState } from 'react';
import List from '../components/List.tsx';
import { PaginationButton } from '../components/Pagination.tsx';
import DarkmodeToggle from '../components/DarkmodeToggle';
import { useDarkmodeContext } from '../utils/darkmode-utils.ts';
import styles from './MainPage.module.less';

const MainPage = () => {
  type View = 'characters' | 'episodes' | 'locations';
  const { theme } = useDarkmodeContext();
  const [view, setView] = useState<View>('characters');

  return (
    <main>
      <DarkmodeToggle className={styles.buttonContainer} />
      <div className={styles.starBackground} />
      <div className={styles.pageContainer}>
        <h1>WUBBA LUBBA FETCH FETCH</h1>
        {theme === 'dark' ? (
          <p>You break the universe Morty, you deal with the tentacles.</p>
        ) : (
          <p>Morty, we’re fetching data, not feelings</p>
        )}
        {(
          [
            { value: 'characters', label: 'Characters' },
            { value: 'episodes', label: 'Episodes' },
            { value: 'locations', label: 'Locations' },
          ] as { value: View; label: string }[]
        ).map((page) => (
          <PaginationButton
            key={page.value}
            option={page}
            value={view}
            onChange={() => setView(page.value)}
          />
        ))}
        <List view={view} />
      </div>
    </main>
  );
};

export default MainPage;
