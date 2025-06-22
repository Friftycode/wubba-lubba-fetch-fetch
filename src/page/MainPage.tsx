import { useState } from 'react';
import List from '../components/List.tsx';
import ToggleView from '../components/ToggleView.tsx';
import DarkmodeToggle from '../components/DarkmodeToggle';
//import spaceship from '../../assets/spaceship.png';
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
      {/*<img src={spaceship} alt="Spaceship" className={styles.spaceship} />*/}
      <div className={styles.pageContainer}>
        <h1>WUBBA LUBBA FETCH FETCH</h1>
        <p>Morty, we’re fetching data, not feelings</p>

        <ToggleView view={view} onChange={setView} />
        <List view={view} />
      </div>
    </main>
  );
};

export default MainPage;
