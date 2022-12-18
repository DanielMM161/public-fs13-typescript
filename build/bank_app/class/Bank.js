"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
var Bank = /** @class */ (function () {
    function Bank(name) {
        this._name = name;
        this._branches = [];
    }
    Bank.prototype.addBranch = function (branch) {
        var hasBranch = this._branches.includes(branch);
        if (!hasBranch)
            this._branches.push(branch);
        return hasBranch;
    };
    Bank.prototype.addCustomer = function (branch, customer) {
        return branch.addCustomer(customer);
    };
    Bank.prototype.addCustomerTransaction = function (branch, customerId, amount) {
        return branch.addCustomerTransaction(customerId, amount);
    };
    Bank.prototype.findBranchByName = function (branchName) {
        var matchedBranches = [];
        this._branches.forEach(function (branch) {
            if (branch.getName() === branchName) {
                matchedBranches.push(branch);
            }
        });
        return matchedBranches.length > 0 ? matchedBranches : null;
    };
    Bank.prototype.checkBranch = function (branch) {
        return this._branches.includes(branch);
    };
    Bank.prototype.listCustomers = function (branch, showTransactions) {
        if (showTransactions) {
            this._branches.forEach(function (branch) {
                branch.getCustomers().forEach(function (customer) {
                    console.log("Customer Name", customer.getName());
                    console.log("Customer Id", customer.getId());
                    console.log("Customer Transactions", customer.getTransactions());
                });
            });
        }
        return this.checkBranch(branch);
    };
    return Bank;
}());
exports.Bank = Bank;
