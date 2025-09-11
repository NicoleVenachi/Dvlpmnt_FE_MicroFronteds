
    export type RemoteKeys = 'characterDetails/CharacterDetails';
    type PackageType<T> = T extends 'characterDetails/CharacterDetails' ? typeof import('characterDetails/CharacterDetails') :any;