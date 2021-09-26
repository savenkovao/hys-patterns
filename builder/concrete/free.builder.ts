import {
    AdvertisementBlock,
    AdvertisementConfig,
    AdvertisementData,
    FreeAppConfig,
    LicenseName,
    Pages
} from "../typings";
import { FreeLicense } from "../base/license.model";
import { Advertisement } from "../base/advertisement.model";
import { Builder } from "../base/builder.abstract";

export class FreeLicenseBuilder extends Builder<FreeAppConfig> {
    private _advertisementData: AdvertisementData[] = [
        [AdvertisementBlock.Header, 'Casino adv in Header - 777'],
        [AdvertisementBlock.MainTop, 'Casino adv in MainTop - 777'],
        [AdvertisementBlock.MainTop, 'Casino adv in MainTop - 777'],
        [AdvertisementBlock.Navigation, 'Casino adv in Navigation - 777'],
        [AdvertisementBlock.Footer, 'Casino adv in Footer - 777'],
    ]

    public setLicense(): void {
        this._instance.license = LicenseName.Free;
    }

    public setCRUDPermissions(): void {
        this._instance.readInstances = true;
        this._instance.createInstances = false;
        this._instance.editInstances = false;
        this._instance.deleteInstances = false;
        this._instance.maxInstancesToCreate = 1;
    }

    public setPages(): void {
        this._instance.pages = [
            Pages.Index,
            Pages.Pricing,
            Pages.InstancesList,
            Pages.InstancesRead,
        ]
    }

    public setAdvertisement(): void {
        this._instance.advertisement = this._advertisementData
            .map((item: AdvertisementData): AdvertisementConfig => new Advertisement(...item));
    }

    public setSpecific(): void {
        this._instance.promotions = {
            header: 'Buy advanced app license from header NOW! 777$',
            main: 'Buy advanced app license from main NOW! 777$',
            footer: 'Buy advanced app license from footer NOW! 777$',
        }
    }

    public reset(): void {
        this._instance = new FreeLicense();
    }
}