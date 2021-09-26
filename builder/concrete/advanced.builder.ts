import { AdvancedAppConfig, LicenseName, Pages } from "../typings";
import { AdvancedLicense } from "../base/license.model";
import { Builder } from "../base/builder.abstract";

export class AdvancedLicenseBuilder extends Builder<AdvancedAppConfig> {

    public setLicense(): void {
        this._instance.license = LicenseName.Simple;
    }

    public setCRUDPermissions(): void {
        this._instance.readInstances = true;
        this._instance.createInstances = true;
        this._instance.editInstances = true;
        this._instance.deleteInstances = true;
        this._instance.maxInstancesToCreate = 777;
    }

    public setPages(): void {
        this._instance.pages = [
            Pages.Index,
            Pages.Pricing,
            Pages.InstancesList,
            Pages.InstancesRead,
            Pages.InstancesEdit,
            Pages.Profile,
            Pages.AdvancedInfo,
        ]
    }

    public setAdvertisement(): void {
        return;
    }

    public setSpecific(): void {
        return;
    }

    public reset(): void {
        this._instance = new AdvancedLicense();
    }
}