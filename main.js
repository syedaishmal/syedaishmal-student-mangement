#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let mybalance = 0;
let answer = await inquirer.prompt([{
        name: "student",
        type: "input",
        message: "enter your student name:",
    },
    {
        name: "courses",
        type: "list",
        message: "select the course to enrolled",
        choices: ["MS.office", "HTML", "CSS", "typescript", "javascript"]
    }
]);
const tutionFee = {
    "MS.office": 2000,
    "HTML": 4000,
    "CSS": 4500,
    "typescript": 7200,
    "javascript": 9000,
};
console.log(`tution Fees: ${tutionFee[answer.courses]}`);
console.log(`balance: ${mybalance}`);
let paymentType = await inquirer.prompt([{
        name: "payment",
        type: "list",
        message: "select payment method",
        choices: ["Bank transfer", "easypaisa", "jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "transfer money",
    }
]);
console.log(`you select payment method ${paymentType.payment}`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`congratulations, you have successfully enrolled in ${answer.courses}`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do next?",
            choices: ["View status", "Exit"]
        }
    ]);
    if (ans.select === "View status") {
        console.log("status");
        console.log(`student name: ${answer.student}`);
        console.log(`student ID: ${randomNumber}`);
        console.log(`course:${answer.courses}`);
        console.log(`tution fees paid: ${paymentAmount}`);
        console.log(`balance: ${mybalance += paymentAmount}`);
    }
    else {
        console.log("Exiting student mangment system");
    }
}
else {
    console.log("invalid amount due to course");
}
