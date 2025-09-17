
    export type RemoteKeys = 'navMF/Navbar';
    type PackageType<T> = T extends 'navMF/Navbar' ? typeof import('navMF/Navbar') :any;