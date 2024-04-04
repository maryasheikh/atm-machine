#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 60000;
let myPin = 4242;
console.log("\n\tWelcome to Marya Sheikh - ATM Machine.\n");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!");
    let operations = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        }
    ]);
    if (operations.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`your remaining amount is: ${myBalance}`);
        }
    }
    ;
    if (operations.operation === "check balance") {
        console.log(`your balance is:  ${myBalance}`);
    }
    if (operations.operation === "fast cash") {
        let cash = await inquirer.prompt([
            {
                name: "options",
                message: "select any amount",
                type: "list",
                choices: ["1000", "5000", "10000", "30000"],
            }
        ]);
        if (myBalance -= cash.options) {
            console.log(`your remaining amount is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin code");
}
