"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(name) {
        this._name = name;
        this._id = this.generateId();
        this._transactions = [];
    }
    Customer.prototype.getName = function () {
        return this._name;
    };
    Customer.prototype.getId = function () {
        return this._id;
    };
    Customer.prototype.getTransactions = function () {
        return this._transactions;
    };
    Customer.prototype.getBalance = function () {
        return this._transactions.reduce(function (acumulator, b) { return acumulator + b.amount; }, 0);
    };
    Customer.prototype.addTransaction = function (amount) {
        if (amount > 0) {
            var transaction = {
                amount: amount,
                date: new Date()
            };
            this._transactions.push(transaction);
            return true;
        }
        return false;
    };
    Customer.prototype.generateId = function () {
        var id = '';
        for (var i = 0; i < 10; i++) {
            id += Math.floor(Math.random() * 10);
        }
        return id;
    };
    return Customer;
}());
exports.Customer = Customer;
