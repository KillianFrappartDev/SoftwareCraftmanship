"use strict";
var Observer = /** @class */ (function () {
    function Observer() {
        this._subscribers = [];
        this._data = 'Init';
    }
    Object.defineProperty(Observer.prototype, "data", {
        get: function () { return this._data; },
        set: function (data) {
            this._data = data;
            for (var _i = 0, _a = this._subscribers; _i < _a.length; _i++) {
                var subscriber = _a[_i];
                subscriber.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Observer.prototype.addSubscriber = function (subscriber) { this._subscribers.push(subscriber); };
    return Observer;
}());
var Subscriber = /** @class */ (function () {
    function Subscriber(observer) {
        this._observer = observer;
        this._data = observer.data;
        this._observer.addSubscriber(this);
    }
    Object.defineProperty(Subscriber.prototype, "data", {
        get: function () { return this._data; },
        enumerable: true,
        configurable: true
    });
    Subscriber.prototype.update = function () { this._data = this._observer.data; };
    return Subscriber;
}());
var observer = new Observer();
var sub1 = new Subscriber(observer);
var sub2 = new Subscriber(observer);
console.log(sub1.data, sub2.data);
observer.data = "Test";
console.log(sub1.data, sub2.data);
