import { AppConfig, BuilderModel, DirectorModel } from "../typings";

export class Director implements DirectorModel {
    private _builder: BuilderModel;

    public setBuilder(builder: BuilderModel) {
        this._builder = builder;
    }

    public buildMin(): AppConfig {
        this._builder.setLicense();
        this._builder.setPages();
        this._builder.setSpecific();

        return this._builder.getInstance();
    }


    public buildMax(): AppConfig {
        this._builder.setLicense();
        this._builder.setCRUDPermissions();
        this._builder.setPages();
        this._builder.setAdvertisement();
        this._builder.setSpecific();

        return this._builder.getInstance();
    }

    public reset() {
        this._builder.reset();
    }
}
