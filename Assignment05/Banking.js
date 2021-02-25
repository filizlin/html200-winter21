var balance = 1000;
let bankopen = true

//The user should see a prompt so they can type which action to perform
//The user will have a list of 4 actions to choose from.
function MenuChoice () {
    let value = prompt ("Please Select one of the menu options to proceed: \
    Enter Q to quit (immediately quits the program) \
    Enter W to withdraw \
    Enter D to deposit \
    Enter B to view balance \
    Please enter your selection (Q/W/D/B): ");
    value = value.toUpperCase();
    return value;
}

//Enter Q to quit (immediately quits the program).
function quit() {
    bankopen = false;
}
//Enter W to withdraw.
//The user will be prompted again to enter an amount to withdraw. After withdrawing money, they should be able to type another option.
//The user should not be able to make excessive withdrawals (no negative balances).
function withdraw() {
    let value = prompt("Please enter the amount that you would like to withdraw: ");
    balance = balance - Number(value);
    if (balance < 0) {
        alert("You cannot make excessive withdrawals.");
    } else {
        alert("You currently have " + balance + " in your account.");
        return balance;
    }
}
//Enter D to deposit.
//The user will be prompted again to enter an amount to deposit. After depositing money, they should be able to type another option.
//The user should have a deposit cap of $50,000.

function deposit() {
    let value = prompt("Please enter the amount that you would like to deposit: ");
    if (value > 50000) {
        alert("You have a deposit cap of $50,000");
    } else {
    balance = balance + Number(value);
    alert("You currently have " + balance + " in your account.")
    return balance; 
    }
}


//Enter B to view balance.
//The user will see their balance. Afterwards, they should be able to type another option.
//The program will loop asking for input until the user enters Q.

while (bankopen) {
    let Selection = MenuChoice();
    if (Selection === 'Q') {
        quit();
    } else if (Selection === 'W') {
        withdraw();
    } else if (Selection === 'D') {
        deposit();
    } else if (Selection === 'B') {
        alert("Your current balance is " + balance);
    } else {
        alert("Please type in an option 'Q' /  'W' / 'D' / 'B'.")
    }
}

