export class Customer {
    constructor(name) {
        this._name = name;
        this._id = this.generateId();
        this._transactions = [];
    }
    getName() {
        return this._name;
    }
    getId() {
        return this._id;
    }
    getTransactions() {
        return this._transactions;
    }
    getBalance() {
        return this._transactions.reduce((acumulator, b) => acumulator + b.amount, 0);
    }
    addTransaction(amount) {
        if (amount > 0) {
            const transaction = {
                amount: amount,
                date: new Date()
            };
            this._transactions.push(transaction);
            return true;
        }
        return false;
    }
    generateId() {
        let id = '';
        for (let i = 0; i < 10; i++) {
            id += Math.floor(Math.random() * 10);
        }
        return id;
    }
}
