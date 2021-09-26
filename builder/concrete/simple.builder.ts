import {
    AdvertisementBlock,
    AdvertisementConfig,
    AdvertisementData,
    LicenseName,
    Pages,
    SimpleAppConfig
} from "../typings";
import { SimpleLicense } from "../base/license.model";
import { Advertisement } from "../base/advertisement.model";
import { Builder } from "../base/builder.abstract";

export class SimpleLicenseBuilder extends Builder<SimpleAppConfig> {
    private _advertisementData: AdvertisementData[] = [
        [AdvertisementBlock.Header, 'Casino adv in Header - 777'],
        [AdvertisementBlock.MainTop, 'Casino adv in MainTop - 777'],
        [AdvertisementBlock.Footer, 'Casino adv in Footer - 777'],
    ]

    public setLicense(): void {
        this._instance.license = LicenseName.Simple;
    }

    public setCRUDPermissions(): void {
        this._instance.readInstances = true;
        this._instance.createInstances = true;
        this._instance.editInstances = true;
        this._instance.deleteInstances = false;
        this._instance.maxInstancesToCreate = 10;
    }

    public setPages(): void {
        this._instance.pages = [
            Pages.Index,
            Pages.Pricing,
            Pages.InstancesList,
            Pages.InstancesRead,
            Pages.InstancesEdit,
            Pages.Profile,
        ]
    }

    public setAdvertisement(): void {
        this._instance.advertisement = this._advertisementData
            .map((item: AdvertisementData): AdvertisementConfig => new Advertisement(...item));
    }

    public setSpecific(): void {
        return;
    }

    public reset(): void {
        this._instance = new SimpleLicense();
    }
}