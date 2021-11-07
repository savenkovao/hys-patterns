var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this._builder = builder;
    };
    Director.prototype.buildMin = function () {
        this._builder.setLicense();
        this._builder.setPages();
        this._builder.setSpecific();
        return this._builder.getInstance();
    };
    Director.prototype.buildMax = function () {
        this._builder.setLicense();
        this._builder.setCRUDPermissions();
        this._builder.setPages();
        this._builder.setAdvertisement();
        this._builder.setSpecific();
        return this._builder.getInstance();
    };
    Director.prototype.reset = function () {
        this._builder.reset();
    };
    return Director;
}());
export { Director };
