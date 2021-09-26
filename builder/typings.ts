export enum LicenseName {
    Free = 'free',
    Simple = 'simple',
    Advanced = 'advanced',
}

export enum AdvertisementBlock {
    Header = 'header',
    Navigation = 'navigation',
    MainTop = 'main-top',
    MainBottom = 'main-bottom',
    Footer = 'footer'
}


export enum Pages {
    Index = 'Index',
    Pricing = 'Pricing',
    Profile = 'Profile',
    InstancesList = 'InstancesList',
    InstancesRead = 'InstancesRead',
    instancesEdit = 'instancesEdit',
    AdvancedInfo = 'AdvancedInfo',
}

export type AdvertisementData = [AdvertisementBlock, string];

export interface AdvertisementConfig {
    block: AdvertisementBlock;
    content: string;
}

export interface AppConfig {
    license: LicenseName;
    pages: string[];
    advertisement?: AdvertisementConfig[];
    readInstances?: boolean;
    createInstances?: boolean;
    editInstances?: boolean;
    deleteInstances?: boolean;
    maxInstancesToCreate?: number;
}

export interface FreeAppConfig extends AppConfig {
    promotions: {
        header: string;
        main: string;
        footer: string;
    }
}

export interface BuilderModel<T extends AppConfig = AppConfig> {
    setLicense(): void;
    setCRUDPermissions(): void;
    setPages(): void;
    setAdvertisement(): void;
    setSpecific(): void;
    getInstance(): T;
    reset(): void;
}

export interface DirectorModel {
    setBuilder(builder: BuilderModel): void;
    buildMin(): AppConfig;
    buildMax(): AppConfig;
    reset(): void;
}