import { createContext } from 'react';
import { useContextOrThrow } from './context-utils.ts';

export const Darkmode = {
  Light: 'light',
  Dark: 'dark',
} as const;

export type Darkmode = (typeof Darkmode)[keyof typeof Darkmode];

type DarkmodeContextType = {
  theme: Darkmode;
  toggleTheme(): void;
};

export const DarkmodeContext = createContext<DarkmodeContextType | undefined>(
  undefined
);

export const useDarkmodeContext = (): DarkmodeContextType =>
  useContextOrThrow(DarkmodeContext);
