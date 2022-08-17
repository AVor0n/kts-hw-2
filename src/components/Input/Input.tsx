import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import './Input.css';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
};

export const Input: FC<InputProps> = ({
  value,
  onChange,
  className,
  disabled,
  ...props
}) => {
  const [inpVal, setInpVal] = useState(value);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInpVal(e.target.value);
    onChange(e.target.value);
  };

  useEffect(() => {
    setInpVal(value);
  }, [value]);

  const cls = classNames('input', disabled && 'input_disabled', className);

  return (
    <input
      type="text"
      className={cls}
      value={inpVal}
      onChange={changeHandler}
      {...props}
      disabled={disabled}
    />
  );
};

Input.defaultProps = {
  value: '',
  onChange: () => {},
};
