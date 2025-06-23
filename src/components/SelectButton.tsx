import styles from './SelectButton.module.less';
import type { ReactNode } from 'react';

type ToggleViewProps<T extends string | number> = {
  options: { value: T; label: ReactNode }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
};

const SelectButton = <T extends string | number>({
  options,
  value,
  onChange,
  className = '',
}: ToggleViewProps<T>) => {
  return (
    <div className={`${styles.toggleButtons} ${className}`}>
      {options.map((opt) => (
        <button
          key={opt.value}
          className={value === opt.value ? styles.active : ''}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default SelectButton;
