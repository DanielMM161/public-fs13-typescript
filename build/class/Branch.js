export class Branch {
    constructor(name) {
        this._name = name;
        this._customers = [];
    }
    getName() {
        return this._name;
    }
    getCustomers() {
        return this._customers;
    }
    addCustomer(customer) {
        const hasCustomer = this._customers.includes(customer);
        if (!hasCustomer)
            this._customers.push(customer);
        return hasCustomer;
    }
    addCustomerTransaction(customerId, numberTransaction) {
        return this._customers.some((value) => {
            if (value.getId() === customerId) {
                value.addTransaction(numberTransaction);
                return true;
            }
            return false;
        });
    }
    findCustomer(customerId) {
        const customer = this._customers.find((customer) => customer.getId() === customerId);
        return customer ?? null;
    }
}
