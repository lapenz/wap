/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, CheckingAccount, Bank */
"use strict";

class Bank {
    constructor() {
        this._accounts = [];
        this._nextNumber = 0;
    }

    getAccounts() {
        return this._accounts;
    }

    getNextNumber() {
        this._nextNumber += 1;
        return this._nextNumber;
    }

    addAccount() {
        this.getAccounts().push(new Account(this.getNextNumber()));
        return this.getAccounts().length;
    }

    addCheckingAccount(overdraft) {
        let acc = new CheckingAccount(this.getNextNumber());
        acc.setOverdraft(overdraft);
        this.getAccounts().push(acc);
        return this.getAccounts().length;
    }

    addSavingsAccount(interest) {
        let acc = new SavingsAccount(this.getNextNumber());
        acc.setInterest(interest);
        this.getAccounts().push(acc);
        return this.getAccounts().length;
    }

    closeAccount(number) {
        let accIndex = this.getAccounts().findIndex(acc => acc.getNumber() === number);

        this.getAccounts().splice(accIndex, 1);
    }

    accountReport() {
        return this.getAccounts().map(account => account.toString());
    }

    endOfMonth() {
        return this.getAccounts().map(acc => acc.endOfMonth());
    }


}
