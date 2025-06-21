import styles from './MainPage.module.less';

const MainPage= () => {
    return (
        <div className={styles.pageContainer}>
        <h1>Welcome to the Main Page</h1>
        <p>This is the main content area of the application.</p>
        </div>
    );
}

export default MainPage;