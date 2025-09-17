
    export type RemoteKeys = 'storeMF/Store';
    type PackageType<T> = T extends 'storeMF/Store' ? typeof import('storeMF/Store') :any;