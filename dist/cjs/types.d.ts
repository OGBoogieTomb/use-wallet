import { AbstractConnector } from '@web3-react/abstract-connector';
export declare type AccountType = 'contract' | 'normal';
export declare type Status = 'connected' | 'disconnected' | 'connecting' | 'error';
export declare type Account = string;
export declare type Balance = string;
export declare type Wallet = {
    account: Account | null;
    balance: string;
    chainId: number;
    connect: (connectorId: string) => void;
    connector: string | null;
    connectors: object;
    error: Error | null;
    ethereum?: any;
    getBlockNumber?: () => number | null;
    networkName: string;
    reset: () => void;
    status: Status;
    type: AccountType | null;
};
declare type EthereumProviderEip1193 = {
    request: (arguments: {
        method: string;
        params?: unknown[] | object;
    }) => Promise<unknown>;
};
declare type EthereumProviderSend = {
    send: (method: string, params: string[]) => Promise<unknown>;
};
declare type EthereumProviderSendAsync = {
    sendAsync: (params: {
        method: string;
        params: string[];
        from: string;
        jsonrpc: '2.0';
        id: number;
    }, callback: (err: Error, result: unknown) => void) => void;
    selectedAddress: string;
};
export declare type EthereumProvider = EthereumProviderEip1193 & EthereumProviderSend & EthereumProviderSendAsync;
export declare type ConnectorInit = () => Promise<Connector>;
export declare type Connector = {
    web3ReactConnector: (params: any) => AbstractConnector;
    handleActivationError?: (error: Error) => Error | null;
};
export declare type ConnectorConfig = {};
export {};
