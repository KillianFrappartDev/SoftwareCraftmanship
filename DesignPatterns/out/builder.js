"use strict";
var Invoice = /** @class */ (function () {
    function Invoice() {
    }
    Invoice.prototype.setCustomer = function (customer) {
        this._customer = customer;
        return this;
    };
    Invoice.prototype.setPrice = function (price) {
        this._price = price;
        return this;
    };
    Invoice.prototype.setDate = function (date) {
        this._date = date;
        return this;
    };
    return Invoice;
}());
var invoice = new Invoice()
    .setCustomer('John')
    .setDate(new Date())
    .setPrice(42);
