import { FC } from "react";
import { Loader, LoaderProps } from "../Loader/Loader";
import './WithLoader.css';

export type WithLoaderProps = React.PropsWithChildren<{
    loading: boolean;
    loaderSize?: LoaderProps['size'];
    loaderCls?: string;
}>;

export const WithLoader: FC<WithLoaderProps> = ({ loading, loaderSize, loaderCls, children }) => (
    loading
        ? (
            <div className="withLoader">
                <Loader loading size={loaderSize} className={loaderCls} />
            </div>
        ) : (
            <>
                {children}
            </>
        )
)
