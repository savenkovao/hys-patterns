import { AppConfig, BuilderModel } from "../typings";

export abstract class Builder<T extends AppConfig> implements BuilderModel<T>{
    protected _instance: T;

    constructor() {
        this.reset();
    }

    public abstract setLicense(): void;

    public abstract setCRUDPermissions(): void;

    public abstract setPages(): void;

    public abstract setAdvertisement(): void;

    public abstract setSpecific(): void;

    public abstract reset(): void;

    public getInstance(): T {
        return this._instance;
    }
}
