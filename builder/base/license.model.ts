import { AdvertisementConfig, AppConfig, FreeAppConfig, LicenseName } from "../typings";

class License implements AppConfig {
    public license: LicenseName = null;
    public readInstances: boolean = null;
    public createInstances: boolean = null;
    public editInstances: boolean = null;
    public deleteInstances: boolean = null;
    public maxInstancesToCreate: number = null;
    public pages: string[] = null;
    public advertisement: AdvertisementConfig[] = null;
}

export class FreeLicense extends License {
    public promotions: FreeAppConfig['promotions'] = null;
}

export class SimpleLicense extends License {
    // public promotions: FreeAppConfig['promotions'] = null;
}

export class AdvancedLicense extends License {
}
