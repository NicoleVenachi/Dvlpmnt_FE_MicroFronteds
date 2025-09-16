
    export type RemoteKeys = 'remoteMF/Header';
    type PackageType<T> = T extends 'remoteMF/Header' ? typeof import('remoteMF/Header') :any;