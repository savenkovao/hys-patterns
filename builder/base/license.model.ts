import { AdvancedAppConfig, AppConfig, FreeAppConfig, LicenseName, SimpleAppConfig } from "../typings";

class License implements AppConfig {
    public license: LicenseName = null;
    public pages: string[] = null;
}

export class FreeLicense extends License implements FreeAppConfig {
    public promotions: FreeAppConfig['promotions'] = null;
}

export class SimpleLicense extends License implements SimpleAppConfig {
}

export class AdvancedLicense extends License implements AdvancedAppConfig {
}
