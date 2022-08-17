import classNames from "classnames";
import { FC } from "react";
import './Loader.css';

export type LoaderProps = {
    loading?: boolean;
    size?: 's' | 'm' | 'l';
    className?: string;
};


export const Loader: FC<LoaderProps> = ({ loading, size, className }) => (
    loading
        ? <div className={classNames('loader', `loader_size-${size}`, className)} />
        : null
)

Loader.defaultProps = {
    size: 'm',
    loading: true,
    className: '',
}
