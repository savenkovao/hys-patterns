import { AppConfig, DirectorModel, FreeAppConfig, LicenseName } from "./typings";
import { Director } from "./base/director.base";
import { FreeLicenseBuilder } from "./concrete/free.builder";
import { Builder } from "./base/builder.abstract";

const builderByLicense: { [key in LicenseName]: { new(): Builder<FreeAppConfig> } } = {
    [LicenseName.Free]: FreeLicenseBuilder,
    [LicenseName.Simple]: FreeLicenseBuilder,
    [LicenseName.Advanced]: FreeLicenseBuilder,
}

class App {
    private _director: DirectorModel = new Director();

    constructor(license: LicenseName) {
        const builder: Builder<FreeAppConfig> = new (builderByLicense[license] || FreeLicenseBuilder)();
        this._director.setBuilder(builder);

        const minConfig: AppConfig = this._director.buildMin();
        const maxConfig: AppConfig = this._director.buildMax();

        console.log(minConfig);
        console.log(maxConfig);

        document.getElementById('min-config').innerHTML = JSON.stringify(minConfig);
        document.getElementById('max-config').innerHTML = JSON.stringify(maxConfig);
    }
}

window.onload = (event) => {
    console.log(event)
    new App(LicenseName.Free);
};