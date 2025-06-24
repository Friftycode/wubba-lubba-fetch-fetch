import { useState } from 'react';
import List from '../components/List.tsx';
import SelectButtons from '../components/SelectButtons.tsx';
import DarkmodeToggle from '../components/DarkmodeToggle';
import { useDarkmodeContext } from '../utils/darkmode-utils.ts';
import styles from './MainPage.module.less';

const MainPage = () => {
  const { theme } = useDarkmodeContext();
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
        <SelectButtons
          options={[
            { value: 'characters', label: 'Characters' },
            { value: 'episodes', label: 'Episodes' },
            { value: 'locations', label: 'Locations' },
          ]}
          value={view}
          onChange={setView}
        />
        <List view={view} />
      </div>
    </main>
  );
};

export default MainPage;
