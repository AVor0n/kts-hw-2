import classNames from 'classnames';
import { FC } from 'react';
import { Loader } from '../Loader/Loader';
import './Button.css';

export enum ButtonColor {
    primary = 'primary',
    secondary = 'secondary'
}

export type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
  color?: ButtonColor;
  className?: string;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  loading,
  color,
  disabled = loading,
  className,
  ...props
}) => {
  const cls = classNames(
    'button',
    `button_color-${color}`,
    disabled && 'button_disabled',
    className
  );

  return (
    <button className={cls} disabled={disabled} {...props}>
      {loading && <Loader loading size="s" />}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: ButtonColor.primary,
  loading: false,
};
