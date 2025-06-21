import List from '../components/List.tsx';

import styles from './MainPage.module.less';

const MainPage = () => {
  return (
    <main className={styles.pageContainer}>
      <h1>POPCORN PICKS</h1>
      <p>More popcorn, less drama</p>
      <List />
    </main>
  );
};

export default MainPage;
