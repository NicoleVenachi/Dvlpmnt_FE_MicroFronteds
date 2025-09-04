
    export type RemoteKeys = 'counter/Counter';
    type PackageType<T> = T extends 'counter/Counter' ? typeof import('counter/Counter') :any;