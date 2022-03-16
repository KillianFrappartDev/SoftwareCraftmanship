class Observer {
    private _subscribers: Subscriber[];
    private _data: string;
    
    constructor() {
        this._subscribers = [];
        this._data = 'Init';
    }

    get data() { return this._data; }
    
    set data(data: string) {
        this._data = data;
        for (const subscriber of this._subscribers) {
            subscriber.update();
        }
    }

    public addSubscriber(subscriber: Subscriber) { this._subscribers.push(subscriber); }
}
class Subscriber {
    private _observer: Observer;
    private _data: string;
    
    constructor(observer: Observer) {
        this._observer = observer;
        this._data = observer.data;
        this._observer.addSubscriber(this);
    }
    
    get data() { return this._data; }
    
    public update() { this._data = this._observer.data; }
}

const observer = new Observer();
const sub1 = new Subscriber(observer);
const sub2 = new Subscriber(observer);
console.log(sub1.data, sub2.data);
observer.data = "Test";
console.log(sub1.data, sub2.data);

