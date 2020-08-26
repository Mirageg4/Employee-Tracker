const connection = require("./db,js");
const inquirer = require("inquirer");
const mysql = require("mysql");
const conTable = require("console.table");

//Inquirer prompts for desired actions
const employeeOptions = function () {
    inquirer
    .prompt({
        type: 'list',
        name: 'employeeOptions',
        message: 'Use arrow keys to select following options',
        choices: [
            'View all employees',
            'View employee roles',
            'View departments',
            'Add an employee',
            'Add employee role',
            'Add department',
            'Update employee role',
            'Remove employee',
        ]
    })

//
    .then(function(optionChoice){
        console.log(optionChoice);

        switch (optionChoice) {
            case 'View all employees':
                await viewEmployees();
                break;

            case 'View all roles':
                 await viewRoles();
                break;

        }
    });

};

employeeOptions();
// Allows user to VIEW ALL EMPLOYEES currently in the database
function viewEmployees() {
    console.log('Employees currently in database');
   let query =
        'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id;';
    connection.query(query, function (err, optionChoice) {
        console.log('\n Employees currently in database \n');
        console.table(optionChoice);
    });
    


}