import { Transaction } from "../interfaces/transaction";

export class Customer {
    
    private _name: string;
    private _id: string;
    private _transactions: Transaction[];
        
    constructor(name: string) {
        this._name = name;
        this._id = this.generateId();
        this._transactions = [];
    }
        
    getName(): string {
        return this._name;
    }
        
    getId(): string {
        return this._id;
    }
        
    getTransactions(): Transaction[] {
        return this._transactions;
    }
        
    getBalance(): number {
        return this._transactions.reduce((acumulator, b) =>  acumulator + b.amount, 0);
    }
        
    addTransaction(amount: number): boolean {
        if (amount > 0) {
            const transaction: Transaction = {
                amount: amount,
                date: new Date()
            };
            this._transactions.push(transaction)
            return true
        }
        return false
    }
        
    generateId(): string {
        let id: string = '';
        for (let i = 0; i < 10; i++) {
            id += Math.floor(Math.random() * 10);
        }
        return id;
    }
}