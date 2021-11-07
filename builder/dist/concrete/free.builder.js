var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { AdvertisementBlock, LicenseName, Pages } from "../typings";
import { FreeLicense } from "../base/license.model";
import { Advertisement } from "../base/advertisement.model";
import { Builder } from "../base/builder.abstract";
var FreeLicenseBuilder = /** @class */ (function (_super) {
    __extends(FreeLicenseBuilder, _super);
    function FreeLicenseBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._advertisementData = [
            [AdvertisementBlock.Header, 'Casino adv in Header - 777'],
            [AdvertisementBlock.MainTop, 'Casino adv in MainTop - 777'],
            [AdvertisementBlock.MainTop, 'Casino adv in MainTop - 777'],
            [AdvertisementBlock.Navigation, 'Casino adv in Navigation - 777'],
            [AdvertisementBlock.Footer, 'Casino adv in Footer - 777'],
        ];
        return _this;
    }
    FreeLicenseBuilder.prototype.setLicense = function () {
        this._instance.license = LicenseName.Free;
    };
    FreeLicenseBuilder.prototype.setCRUDPermissions = function () {
        this._instance.readInstances = true;
        this._instance.createInstances = false;
        this._instance.editInstances = false;
        this._instance.deleteInstances = false;
        this._instance.maxInstancesToCreate = 1;
    };
    FreeLicenseBuilder.prototype.setPages = function () {
        this._instance.pages = [
            Pages.Index,
            Pages.Pricing,
            Pages.InstancesList,
            Pages.InstancesRead,
        ];
    };
    FreeLicenseBuilder.prototype.setAdvertisement = function () {
        this._instance.advertisement = this._advertisementData
            .map(function (item) { return new (Advertisement.bind.apply(Advertisement, __spreadArray([void 0], item)))(); });
    };
    FreeLicenseBuilder.prototype.setSpecific = function () {
        this._instance.promotions = {
            header: 'Buy advanced app license from header NOW! 777$',
            main: 'Buy advanced app license from main NOW! 777$',
            footer: 'Buy advanced app license from footer NOW! 777$',
        };
    };
    FreeLicenseBuilder.prototype.reset = function () {
        this._instance = new FreeLicense();
    };
    return FreeLicenseBuilder;
}(Builder));
export { FreeLicenseBuilder };
