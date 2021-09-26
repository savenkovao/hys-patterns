import { AppConfig, DirectorModel, LicenseName } from "./typings";
import { Director } from "./base/director.base";
import { FreeLicenseBuilder } from "./concrete/free.builder";
import { Builder } from "./base/builder.abstract";
import { SimpleLicenseBuilder } from "./concrete/simple.builder";
import { AdvancedLicenseBuilder } from "./concrete/advanced.builder";

const builderByLicense: { [key in LicenseName]: { new(): Builder<AppConfig> } } = {
    [LicenseName.Free]: FreeLicenseBuilder,
    [LicenseName.Simple]: SimpleLicenseBuilder,
    [LicenseName.Advanced]: AdvancedLicenseBuilder,
}

class App {
    private _director: DirectorModel = new Director();

    constructor() {
        const minEl: HTMLElement = document.getElementById('min-config');
        const maxEl: HTMLElement = document.getElementById('max-config');
        const licenseEl: HTMLSelectElement = document.getElementById('license') as HTMLSelectElement;

        licenseEl.addEventListener('change', (e: Event): void => {
            const builder: Builder<AppConfig> = new (builderByLicense[licenseEl.value] || FreeLicenseBuilder)();
            this._director.setBuilder(builder);

            const minConfig: AppConfig = this._director.buildMin();
            const maxConfig: AppConfig = this._director.buildMax();

            console.log(minConfig);
            console.log(maxConfig);

            minEl.innerHTML = JSON.stringify(minConfig);
            maxEl.innerHTML = JSON.stringify(maxConfig);
        });
    }
}

window.onload = (event: Event) => {
    new App();
};