import type { FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';
import { Darkmode, DarkmodeContext } from './darkmode-utils.ts';

export const DarkmodeProvider: FC<PropsWithChildren> = ({ children }) => {
  const localStorageTheme = localStorage.getItem('theme') as Darkmode;
  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Darkmode.Dark
    : Darkmode.Light;
  const [theme, setTheme] = useState(localStorageTheme || defaultTheme);

  useEffect(() => {
    if (defaultTheme) {
      setTheme(theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [defaultTheme, theme]);

  const toggleTheme = () => {
    const newTheme = theme === Darkmode.Light ? Darkmode.Dark : Darkmode.Light;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <DarkmodeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkmodeContext.Provider>
  );
};
