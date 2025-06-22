import type { FC } from 'react';
import { useState } from 'react';
import MoonIcon from '../../assets/MoonIcon';
import SunIcon from '../../assets/SunIcon';
import { Darkmode, useDarkmodeContext } from '../utils/darkmode-utils.ts';
import styles from './DarkmodeToggle.module.less';

interface DarkmodeToggleProps {
  className?: string;
}

const DarkmodeToggle: FC<DarkmodeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useDarkmodeContext();
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    toggleTheme();
    setIsToggled(!isToggled);
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle dark mode"
      className={`${styles.darkmodeToggle} ${className}`}
    >
      {theme === Darkmode.Dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default DarkmodeToggle;
