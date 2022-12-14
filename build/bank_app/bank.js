"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Branch_1 = require("./class/Branch");
var Customer_1 = require("./class/Customer");
var Bank_1 = require("./class/Bank");
var arizonaBank = new Bank_1.Bank("Arizona");
var westBranch = new Branch_1.Branch("West Branch");
var sunBranch = new Branch_1.Branch("Sun Branch");
var customer1 = new Customer_1.Customer("John");
var customer2 = new Customer_1.Customer("Anna");
var customer3 = new Customer_1.Customer("John");
arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);
arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");
arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);
customer1.addTransaction(-1000);
console.log(customer1.getBalance());
console.log(arizonaBank.listCustomers(westBranch, true));
console.log(arizonaBank.listCustomers(sunBranch, true));
