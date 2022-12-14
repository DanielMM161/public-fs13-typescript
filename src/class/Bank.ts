import { Branch } from './Branch'
import { Customer } from './Customer'

export class Bank {
    
    private _name: string;
    private _branches: Branch[];

    constructor(name: string) {
        this._name = name;
        this._branches = [];
    }
        
    addBranch(branch: Branch): boolean {
        if (this._branches.indexOf(branch) === -1) {
            this._branches.push(branch);
            return true;
        }
        return false;
    }
        
    addCustomer(branch: Branch, customer: Customer): boolean {
        if (branch.addCustomer(customer)) {
        return true;
        }
        return false;
    }
        
    addCustomerTransaction(branch: Branch, customerId: string, amount: number): boolean {
        return branch.addCustomerTransaction(customerId, amount)
    }
        
    findBranchByName(branchName: string): Branch[] | null {
        let matchedBranches: Branch[] = [];
        this._branches.forEach((branch) => {
            if (branch.getName() === branchName) {
                matchedBranches.push(branch)
            }
        })
        return matchedBranches.length > 0 ? matchedBranches : null;
    }
        
    checkBranch(branch: Branch): boolean {
        return this._branches.includes(branch)
    }
        
    listCustomers(branch: Branch, showTransactions: boolean): boolean {
        if (showTransactions) {
            this._branches.forEach((branch) => {
               branch.getCustomers().forEach((customer) => {
                console.log("Customer Name", customer.getName())
                console.log("Customer Id", customer.getId())
                console.log("Customer Transactions", customer.getTransactions())
                })
            })
        }
        return this.checkBranch(branch)
    }
}