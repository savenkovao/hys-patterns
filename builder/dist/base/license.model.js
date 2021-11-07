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
var License = /** @class */ (function () {
    function License() {
        this.license = null;
        this.readInstances = null;
        this.createInstances = null;
        this.editInstances = null;
        this.deleteInstances = null;
        this.maxInstancesToCreate = null;
        this.pages = null;
        this.advertisement = null;
    }
    return License;
}());
var FreeLicense = /** @class */ (function (_super) {
    __extends(FreeLicense, _super);
    function FreeLicense() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.promotions = null;
        return _this;
    }
    return FreeLicense;
}(License));
export { FreeLicense };
var SimpleLicense = /** @class */ (function (_super) {
    __extends(SimpleLicense, _super);
    function SimpleLicense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SimpleLicense;
}(License));
export { SimpleLicense };
var AdvancedLicense = /** @class */ (function (_super) {
    __extends(AdvancedLicense, _super);
    function AdvancedLicense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdvancedLicense;
}(License));
export { AdvancedLicense };
