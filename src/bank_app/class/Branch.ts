import { Customer } from "./Customer"

export class Branch {
    
    private _name: string;
    private _customers: Customer[];
    
    constructor(name: string) {
        this._name = name;
        this._customers = [];
    }
    
    getName(): string {
        return this._name;
    }
    
    getCustomers(): Customer[] {
        return this._customers;
    }
    
    addCustomer(customer: Customer): boolean {
        const hasCustomer = this._customers.includes(customer)
        if(!hasCustomer) this._customers.push(customer);
        return hasCustomer
    }
    
    addCustomerTransaction(customerId: string, numberTransaction: number): boolean {
        return this._customers.some((value) => {
            if (value.getId() === customerId) {
                value.addTransaction(numberTransaction);
                return true
            }
            return false
        })
    }
    
    findCustomer(customerId: string): Customer | null {
        const customer = this._customers.find((customer) => customer.getId() === customerId)
        return customer ?? null
    }
}