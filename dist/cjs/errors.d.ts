export declare class ChainUnsupportedError extends Error {
    constructor(chainId: number, expectedChainId: number, ...params: any[]);
}
export declare class ConnectorUnsupportedError extends Error {
    constructor(connectorId: string, ...params: any[]);
}
export declare class ConnectionRejectedError extends Error {
    constructor(...params: any[]);
}
export declare class ConnectorConfigError extends Error {
    constructor(...params: any[]);
}
