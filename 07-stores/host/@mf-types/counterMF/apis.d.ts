
    export type RemoteKeys = 'counterMF/Counter';
    type PackageType<T> = T extends 'counterMF/Counter' ? typeof import('counterMF/Counter') :any;