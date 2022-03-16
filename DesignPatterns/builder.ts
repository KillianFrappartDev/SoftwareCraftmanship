class Invoice {
    private _customer?: string;
    private _price?: number;
    private _date?: Date;

    constructor() {}

    public setCustomer(customer: string): Invoice {
        this._customer = customer;
        return this;
    }

    public setPrice(price: number): Invoice {
        this._price = price;
        return this;
    }

    public setDate(date: Date): Invoice {
        this._date = date;
        return this;
    }
}

const invoice = new Invoice()    
                    .setCustomer('John')
                    .setDate(new Date())
                    .setPrice(42);
