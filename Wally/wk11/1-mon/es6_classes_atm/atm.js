

class ATM {
  constructor (type, money, transactionHistory) {
    this.type = type;
    this.money = money;
    this.transactionHistory = transactionHistory;
  }

  transactionHistory() {
    console.log(this.transactionHistory);
    return this.transactionHistory;
  }

  showBalance() {
    console.log(this.money);
    return this.money;
  }

  withdraw(amount) {
    this.transactionHistory.push(-amount);
    this.money = this.money - amount;
    return this.money;
  }

  deposit(amount) {
    this.transactionHistory.push(amount);
    this.money = this.money + amount;
    return this.money;
  }

}

let savings = new ATM ("savings", 0, [0]);

savings.deposit(100);
savings.withdraw(30);
savings.showBalance;
savings.transactionHistory;
