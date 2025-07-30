
    export type RemoteKeys = 'colorPicker/ColorPicker';
    type PackageType<T> = T extends 'colorPicker/ColorPicker' ? typeof import('colorPicker/ColorPicker') :any;