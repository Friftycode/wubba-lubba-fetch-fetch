import styles from './Pagination.module.less';
import classNames from 'classnames';

type PaginationProps = {
  options: { value: string | number; label: string }[];
  value: string | number;
  onChange: (value: string | number) => void;
  className?: string;
  totalPages: number;
};

const Pagination = ({
  options,
  value,
  onChange,
  className,
  totalPages,
}: PaginationProps) => {
  const isValueLower = Number(value) < 2;
  const isValueInMiddle =
    Number(value) > 1 && Number(value) < options.length - 3;
  const isValueHigher = Number(value) > options.length - 4;
  const isMoreThanThreePages = totalPages > 3;

  return (
    <div className={classNames(styles.container, className)}>
      {(!isMoreThanThreePages
        ? options
        : options.slice(0, !isValueLower ? 2 : 4)
      ).map((option) => (
        <PaginationButton
          key={option.value}
          option={option}
          value={value}
          onChange={onChange}
        />
      ))}
      {isMoreThanThreePages && (
        <>
          {Number(value) > 2 && '...'}
          {isValueInMiddle &&
            options
              .slice(
                Number(value),
                Number(value) < totalPages - 2 ? Number(value) + 3 : totalPages
              )
              .map((option) => (
                <PaginationButton
                  key={option.value}
                  option={option}
                  value={value}
                  onChange={onChange}
                />
              ))}
          {Number(value) < totalPages - 3 && '...'}
          {options.slice(isValueHigher ? Number(value) : -2).map((option) => (
            <PaginationButton
              key={option.value}
              option={option}
              value={value}
              onChange={onChange}
            />
          ))}
        </>
      )}
    </div>
  );
};

type PaginationButtonProps = {
  option: { value: string | number; label: string };
  value: string | number;
  onChange: (value: string | number) => void;
  className?: string;
};

export const PaginationButton = ({
  option,
  value,
  onChange,
  className = '',
}: PaginationButtonProps) => (
  <button
    key={option.value}
    className={classNames(
      styles.pagination,
      value === option.value ? styles.active : '',
      className
    )}
    onClick={() => onChange(option.value)}
  >
    {option.label}
  </button>
);

export default Pagination;
