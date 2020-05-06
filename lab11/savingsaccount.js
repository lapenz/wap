/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, Bank */
"use strict";

class SavingsAccount extends Account {
    constructor(number) {
        super(number);
        this._interest = 0;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(value) {
        this._interest = value;
    }

    addInterest() {
        this.deposit(this.getBalance() * this.getInterest() / 100);
    }

    endOfMonth() {
        let oldBalance = this.getBalance();
        this.addInterest();
        let interest = this.getBalance() - oldBalance;

        return "Interest added SavingsAccount "+ this.getNumber() + ": balance: "+ this.getBalance() + " interest: "+ interest;
    }

    toString() {
        return "SavingsAccount " + this.getNumber() + ": balance " + this.getBalance() + ", interest " + this.getInterest();
    }

}