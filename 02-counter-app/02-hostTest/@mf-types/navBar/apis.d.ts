
    export type RemoteKeys = 'navBar/Navbar';
    type PackageType<T> = T extends 'navBar/Navbar' ? typeof import('navBar/Navbar') :any;