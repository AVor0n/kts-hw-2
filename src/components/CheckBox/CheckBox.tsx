import classNames from 'classnames';
import { FC, useState } from 'react';

/** Пропсы, которые принимает компонент CheckBox */
type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (value: boolean) => void;
  disabled?: boolean;
  className?: string;
  checked?: boolean;
};

export const CheckBox: FC<CheckBoxProps> = ({
  disabled,
  onChange,
  className,
  checked,
  ...props
}) => {
  const [value, setValue] = useState(checked);
  const changeHandler = () => {
      setValue(!value);
      onChange(!value);
  };

  const cls = classNames(
    'checkbox',
    disabled && 'checkbox_disabled',
    className
  );

  return (
    <input
      type="checkbox"
      className={cls}
      checked={value}
      onChange={changeHandler}
      disabled={disabled}
      {...props}
    />
  );
};
