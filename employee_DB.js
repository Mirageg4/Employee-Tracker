const connection = require("./db,js");
const inquirer = require("inquirer");
const mysql = require("mysql");

const startQuestions = function () {
    inquirer
    .prompt({
        type: "list",
        name: "startQuestions",
        message: "Use arrow keys to select following options",
        choices: [
            "View all employees",
            "View employee roles",
            "View departments",
            "Add an employee",
            "Add employee role",
            "Add department",
            "Update employee role",
            "Remove employee",
        ]
    });

}