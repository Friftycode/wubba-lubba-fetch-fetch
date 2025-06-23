import { useState } from 'react';
import List from '../components/List.tsx';
import SelectButton from '../components/SelectButton.tsx';
import DarkmodeToggle from '../components/DarkmodeToggle';
import styles from './MainPage.module.less';

const MainPage = () => {
  const [view, setView] = useState<'characters' | 'episodes' | 'locations'>(
    'characters'
  );

  const renderSelectButton = () => (
    <SelectButton
      options={[
        { value: 'characters', label: 'Characters' },
        { value: 'episodes', label: 'Episodes' },
        { value: 'locations', label: 'Locations' },
      ]}
      value={view}
      onChange={setView}
    />
  );

  return (
    <main>
      <div className={styles.buttonContainer}>
        <DarkmodeToggle />
      </div>
      <div className={styles.starBackground}></div>
      <div className={styles.pageContainer}>
        <h1>WUBBA LUBBA FETCH FETCH</h1>
        <p>Morty, we’re fetching data, not feelings</p>
        {renderSelectButton()}
        <List view={view} />
      </div>
    </main>
  );
};

export default MainPage;
