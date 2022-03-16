"use strict";
var Settings = /** @class */ (function () {
    function Settings() {
    }
    Settings.getInstance = function () {
        if (!this._instance) {
            this._instance = new Settings();
        }
        return this._instance;
    };
    return Settings;
}());
var settings = Settings.getInstance();
