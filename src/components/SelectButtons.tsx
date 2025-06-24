import styles from './SelectButton.module.less';
import type { ReactNode } from 'react';
import classNames from 'classnames';
type SelectButtonsProps<T extends string | number> = {
  options: { value: T; label: ReactNode }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  pagination?: boolean;
};

const SelectButtons = <T extends string | number>({
  options,
  value,
  onChange,
  className = '',
}: SelectButtonsProps<T>) => {
  return options.map((opt) => (
    <button
      key={opt.value}
      className={classNames(
        styles.selectButton,
        value === opt.value ? styles.active : '',
        className
      )}
      onClick={() => onChange(opt.value)}
    >
      {opt.label}
    </button>
  ));
};

export default SelectButtons;
