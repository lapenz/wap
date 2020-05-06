/*jshint  esversion:6, globalstrict:true */
/*global assert, Account, SavingsAccount, CheckingAccount, Bank */
"use strict";

(function(CHAI) {

    describe("Account class", function() {
        context("when create Account(1) and call getNumber()", function() {

            it("the result is 1", function() {
                let acc = new Account(1);
                CHAI.assert.equal(acc.getNumber(), 1);
            });
        });

        context("when create Account(1) and call deposit(23)", function() {

            it("the balance must be 23", function() {
                let acc = new Account(1);
                acc.deposit(23);
                CHAI.assert.equal(acc.getBalance(), 23);
            });
        });

        context("when create Account(1) and call deposit(200) and withdraw(100)", function() {

            it("the balance must be 100", function() {
                let acc = new Account(1);
                acc.deposit(200);
                acc.withdraw(100);
                CHAI.assert.equal(acc.getBalance(), 100);
            });
        });
    });

    describe("SavingsAccount class", function() {
        context("when create SavingsAccount(1) and call deposit(100) and interest = 1 and addInterest()", function() {

            it("the balance must be 101", function() {
                let acc = new SavingsAccount(1);
                acc.deposit(100);
                acc.setInterest(1);
                acc.addInterest();
                CHAI.assert.equal(acc.getBalance(), 101);
            });
        });


    });

    describe("CheckingAccount class", function() {
        context("when create CheckingAccount(1) and set overdraft = 100 and withdraw(100)", function() {

            it("the balance must be -100", function() {
                let acc = new CheckingAccount(1);
                acc.setOverdraft(100);
                acc.withdraw(100);
                CHAI.assert.equal(acc.getBalance(), -100);
            });
        });

        context("when create CheckingAccount(1) and set overdraft = 100 and withdraw(101)", function() {

            it("the Error 'Insufficient funds' must be returned", function() {
                let acc = new CheckingAccount(1);
                acc.setOverdraft(100);

                CHAI.expect(() => acc.withdraw(101)).to.throw(Error, "Insufficient funds");
            });
        });


    });

    describe("Bank class", function() {
        context("when create a Bank with 1 Account, a CheckingAccount with overdraft of 80 and withdraw 20, " +
            "and a SavingsAccount with 10 of interest and deposit 100 ", function() {

            it("the bank endOfMonth function must return [\n" +
                "                        \"\",\n" +
                "                        \"Warning, low balance CheckingAccount 2: balance: -20 overdraft limit: -80\",\n" +
                "                        \"Interest added SavingsAccount 3: balance: 110 interest: 10\"\n" +
                "                    ]", function() {
                let bank = new Bank();
                bank.addAccount();
                bank.addCheckingAccount(80);
                bank.getAccounts()[1].withdraw(20);
                bank.addSavingsAccount(10);
                bank.getAccounts()[2].deposit(100);

                CHAI.assert.deepEqual(bank.endOfMonth(), [
                        "",
                        "Warning, low balance CheckingAccount 2: balance: -20 overdraft limit: -80",
                        "Interest added SavingsAccount 3: balance: 110 interest: 10"
                    ]);
            });
        });

        context("when create a Bank with 1 Account, a CheckingAccount with overdraft of 80 then deposit 1000 and then withdraw 500, " +
            "and a SavingsAccount with 10 of interest and deposit 200 ", function() {

            it("the bank endOfMonth function must return [" +
                "\"\", \"Interest added SavingsAccount 3: balance: 220 interest: 20\"]", function() {

                let bank = new Bank();
                bank.addAccount();
                bank.addCheckingAccount(80);
                bank.getAccounts()[1].deposit(1000);
                bank.getAccounts()[1].withdraw(500);
                bank.addSavingsAccount(10);
                bank.getAccounts()[2].deposit(200);
                bank.closeAccount(1);

                CHAI.assert.deepEqual(bank.endOfMonth(), [
                    "",
                    "Interest added SavingsAccount 3: balance: 220 interest: 20"
                ]);
            });
        });

        context("when create a Bank with 1 Account, a CheckingAccount with overdraft of 80 then deposit 1000 and then withdraw 500, " +
            "and a SavingsAccount with 10 of interest and deposit 200 ", function() {

            it("the bank accountReport function must return [" +
                "\"CheckingAccount 2: balance 500, overdraft -80↵\", \"SavingsAccount 3: balance 200, interest 10↵\"]", function() {

                let bank = new Bank();
                bank.addAccount();
                bank.addCheckingAccount(80);
                bank.getAccounts()[1].deposit(1000);
                bank.getAccounts()[1].withdraw(500);
                bank.addSavingsAccount(10);
                bank.getAccounts()[2].deposit(200);
                bank.closeAccount(1);

                CHAI.assert.deepEqual(bank.accountReport(), [
                    "CheckingAccount 2: balance 500, overdraft -80",
                    "SavingsAccount 3: balance 200, interest 10"
                ]);
            });
        });






    });






}(chai));
