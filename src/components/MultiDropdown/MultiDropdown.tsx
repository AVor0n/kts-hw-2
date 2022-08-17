import classNames from 'classnames';
import { FC, useState } from 'react';
import './MultiDropdown.css';
/** Вариант для выбора в фильтре */
type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
type MultiDropdownProps = {
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, массив может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
  pluralizeOptions: (value: Option[]) => string;
};

export const MultiDropdown: FC<MultiDropdownProps> = ({
  options,
  value,
  onChange,
  disabled,
  pluralizeOptions,
}) => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    if(disabled) return;
    setOpen(!open)
  }
  const clickHandler = (opt: Option) => {
    if (disabled) return;
    if (value.find((it) => it.key === opt.key)) {
      value = value.filter((it) => it.key !== opt.key);
      onChange(value);
    } else {
      value.push(opt);
      onChange([opt]);
    }
  };
  return (
    <div className={classNames('select', disabled && 'select_value-disabled')}>
      <div className='select_value' onClick={openHandler}>{pluralizeOptions(value)}</div>
      {open && !disabled && <ul className='select_options'>
        {options.map((it) => (
          <li
            key={it.key}
            onClick={() => clickHandler(it)}
            className={classNames(
              'select_option',
              value.find((opt) => opt.key === it.key) &&
                'select_option-selected'
            )}
          >
            {it.value}
          </li>
        ))}
      </ul>}
    </div>
  );
};

MultiDropdown.defaultProps = {
  onChange: () => {},
  pluralizeOptions: (it) => it.join(', '),
  disabled: false,
  value: [],
  options: [],
};
