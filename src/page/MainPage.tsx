import List from '../components/List.tsx';

import styles from './MainPage.module.less';

const MainPage = () => {
  return (
    <main className={styles.pageContainer}>
      <h1>WUBBA LUBBA FETCH FETCH</h1>
      <p>Morty, we’re fetching data, not feelings</p>
      <List />
    </main>
  );
};

export default MainPage;
