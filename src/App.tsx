import MainPage from './page/MainPage.tsx';
import { DarkmodeProvider } from './utils/DarkmodeProvider';

import './App.less';

function App() {
  return (
    <DarkmodeProvider>
      <MainPage />
    </DarkmodeProvider>
  );
}

export default App;
