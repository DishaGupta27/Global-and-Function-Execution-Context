function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function (amount) {
            if (amount <= 0) {
                return "Deposit amount must be greater than 0.";
            }
            balance += amount;
            return balance;
        },

        withdraw: function (amount) {
            if (amount <= 0) {
                return "Withdrawal amount must be greater than 0.";
            }
            if (amount > balance) {
                return "Insufficient funds.";
            }
            balance -= amount;
            return balance;
        },

        getBalance: function () {
            return balance;
        }
    };
}
