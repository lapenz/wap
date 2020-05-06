/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, Bank */
"use strict";

class CheckingAccount extends Account {
    constructor(number) {
        super(number);
        this._overdraft = 0;
    }

    getOverdraft() {
        return this._overdraft;
    }

    setOverdraft(value) {
        this._overdraft = -Math.abs(value);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        let tempBalance = this.getBalance() - amount;
        if (tempBalance < this._overdraft) {
            throw Error("Insufficient funds");
        } else {
            this._balance -= amount;
        }
    }

    endOfMonth() {
        if(this.getBalance() < 0) {
            return "Warning, low balance CheckingAccount "+this.getNumber()+": balance: "+this.getBalance()+" overdraft limit: "+this.getOverdraft();
        } else {
            return "";
        }
    }

    toString() {
        return "CheckingAccount " + this.getNumber() + ": balance " + this.getBalance() + ", overdraft " + this.getOverdraft();
    }

}