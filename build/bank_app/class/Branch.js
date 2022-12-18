"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Branch = void 0;
var Branch = /** @class */ (function () {
    function Branch(name) {
        this._name = name;
        this._customers = [];
    }
    Branch.prototype.getName = function () {
        return this._name;
    };
    Branch.prototype.getCustomers = function () {
        return this._customers;
    };
    Branch.prototype.addCustomer = function (customer) {
        var hasCustomer = this._customers.includes(customer);
        if (!hasCustomer)
            this._customers.push(customer);
        return hasCustomer;
    };
    Branch.prototype.addCustomerTransaction = function (customerId, numberTransaction) {
        return this._customers.some(function (value) {
            if (value.getId() === customerId) {
                value.addTransaction(numberTransaction);
                return true;
            }
            return false;
        });
    };
    Branch.prototype.findCustomer = function (customerId) {
        var customer = this._customers.find(function (customer) { return customer.getId() === customerId; });
        return customer !== null && customer !== void 0 ? customer : null;
    };
    return Branch;
}());
exports.Branch = Branch;
