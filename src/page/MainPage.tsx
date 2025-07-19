import { useState } from 'react';
import List from '../components/List.tsx';
import { PaginationButton } from '../components/Pagination.tsx';
import DarkmodeToggle from '../components/DarkmodeToggle';
import { useDarkmodeContext } from '../utils/darkmode-utils.ts';
import styles from './MainPage.module.less';

const MainPage = () => {
  const [view, setView] = useState<'characters' | 'episodes' | 'locations'>(
    'characters'
  );

  return (
    <main>
      <div className={styles.buttonContainer}>
        <DarkmodeToggle />
      </div>
      <div className={styles.starBackground}></div>
      <div className={styles.pageContainer}>
        {theme === 'dark' ? (
          <>
            <h1>WUBBA LUBBA FETCH FETCH</h1>
            <p>You break the universe Morty, you deal with the tentacles.</p>
          </>
        ) : (
          <>
            <h1>WUBBA LUBBA FETCH FETCH</h1>
            <p>Morty, we’re fetching data, not feelings</p>
          </>
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
