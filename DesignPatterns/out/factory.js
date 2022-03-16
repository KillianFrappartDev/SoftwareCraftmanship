"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MobileComponent = /** @class */ (function () {
    function MobileComponent() {
    }
    return MobileComponent;
}());
var IOSComponent = /** @class */ (function (_super) {
    __extends(IOSComponent, _super);
    function IOSComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IOSComponent;
}(MobileComponent));
var AndroidComponent = /** @class */ (function (_super) {
    __extends(AndroidComponent, _super);
    function AndroidComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AndroidComponent;
}(MobileComponent));
var UbuntuComponent = /** @class */ (function (_super) {
    __extends(UbuntuComponent, _super);
    function UbuntuComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UbuntuComponent;
}(MobileComponent));
var ComponentFactory = /** @class */ (function () {
    function ComponentFactory() {
    }
    ComponentFactory.generateComponent = function (os) {
        switch (os) {
            case 'IOS':
                return new IOSComponent();
            case 'Android':
                return new AndroidComponent();
            case 'Ubuntu':
                return new UbuntuComponent();
            default:
                return new MobileComponent();
        }
    };
    return ComponentFactory;
}());
var newComponent = ComponentFactory.generateComponent('IOS');
