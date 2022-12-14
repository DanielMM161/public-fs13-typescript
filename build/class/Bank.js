export class Bank {
    constructor(name) {
        this._name = name;
        this._branches = [];
    }
    addBranch(branch) {
        if (this._branches.indexOf(branch) === -1) {
            this._branches.push(branch);
            return true;
        }
        return false;
    }
    addCustomer(branch, customer) {
        if (branch.addCustomer(customer)) {
            return true;
        }
        return false;
    }
    addCustomerTransaction(branch, customerId, amount) {
        return branch.addCustomerTransaction(customerId, amount);
    }
    findBranchByName(branchName) {
        let matchedBranches = [];
        this._branches.forEach((branch) => {
            if (branch.getName() === branchName) {
                matchedBranches.push(branch);
            }
        });
        return matchedBranches.length > 0 ? matchedBranches : null;
    }
    checkBranch(branch) {
        return this._branches.includes(branch);
    }
    listCustomers(branch, showTransactions) {
        if (showTransactions) {
            this._branches.forEach((branch) => {
                branch.getCustomers().forEach((customer) => {
                    console.log("Customer Name", customer.getName());
                    console.log("Customer Id", customer.getId());
                    console.log("Customer Transactions", customer.getTransactions());
                });
            });
        }
        return this.checkBranch(branch);
    }
}
