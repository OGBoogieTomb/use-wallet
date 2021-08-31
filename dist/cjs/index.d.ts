import type { ReactNode } from 'react';
import * as PropTypes from 'prop-types';
import { Connector, ConnectorConfig, Wallet } from './types';
import { ConnectionRejectedError, ChainUnsupportedError, ConnectorUnsupportedError } from './errors';
declare type UseWalletProviderProps = {
    chainId: number;
    children: ReactNode;
    connectors: {
        [key: string]: Connector | ConnectorConfig;
    };
    pollBalanceInterval: number;
    pollBlockNumberInterval: number;
};
declare function useWallet(): Wallet;
declare function UseWalletProviderWrapper(props: UseWalletProviderProps): JSX.Element;
declare namespace UseWalletProviderWrapper {
    var propTypes: {
        chainId: PropTypes.Requireable<number>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        connectors: PropTypes.Requireable<{
            [x: string]: object | null | undefined;
        }>;
        pollBalanceInterval: PropTypes.Requireable<number>;
        pollBlockNumberInterval: PropTypes.Requireable<number>;
    };
    var defaultProps: {
        chainId: number;
        connectors: {};
        pollBalanceInterval: number;
        pollBlockNumberInterval: number;
    };
}
export { ConnectionRejectedError, ChainUnsupportedError, ConnectorUnsupportedError, UseWalletProviderWrapper as UseWalletProvider, useWallet, };
export default useWallet;
