class BankAccount {
    static totalAccountsValue = 0;
    constructor (accountType, currentBalance = 0) {
        this.accountType = accountType;
        this.currentBalance = currentBalance;
    }
    checkAccount () {
        console.log("account type: " + this.accountType + " current balance: " +  this.currentBalance);
    }
    deposit(amount) {
        this.currentBalance += amount;
        console.log(`Current balance: $ ${this.currentBalance}`);
        BankAccount.totalAccountsValue += amount;
    }
    withdraw(amount) {
        this.currentBalance -= amount;
        console.log(this.currentBalance);
        BankAccount.totalAccountsValue -= amount;
        if(this.currentBalance < 0) {
            this.overDraftFees += 20;
        }
    }
}

let myAccount = new BankAccount("checking")
let secondAccount = new BankAccount("checking", 200)
myAccount.checkAccount();
secondAccount.checkAccount();
secondAccount.deposit(10000);
myAccount.deposit(100);
console.log("total bank value: " + BankAccount.totalAccountsValue);