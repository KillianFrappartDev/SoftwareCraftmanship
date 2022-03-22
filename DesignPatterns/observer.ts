class Server {
    private _subscribers: Smartphone[];
    
    constructor() {
        this._subscribers = [];
    }

    public update() { 
        console.log("Server updated!"); 
        for (const subscriber of this._subscribers) { subscriber.notify(); }
    }
    public addSubscriber(subscriber: Smartphone) { this._subscribers.push(subscriber); }
}
class Smartphone {
    private name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    public notify() { console.log(`Device: ${this.name} got notied of a server update.`); }
}

const server = new Server();
const android = new Smartphone('Android');
const ios = new Smartphone('IOS');

server.addSubscriber(android);
server.addSubscriber(ios);
server.update();
