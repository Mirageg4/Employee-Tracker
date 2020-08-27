const connection = require("./db.js");
const inquirer = require("inquirer");

employeeOptions();

const mysql = require("mysql");
const conTable = require("console.table");

//Inquirer prompts for desired actions
async function employeeOptions() {
    await inquirer.prompt({
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
    }).then(({ employeeOptions }) => {
        
        console.log(employeeOptions);
    
        switch (employeeOptions) {
            case 'View All Employees':
                viewEmployees();
                break;
    
            case 'View Employee Roles':
                viewRoles();
                break;

            case 'View Departments':
                viewDepartments();
                break;  
                
            case 'Add Employee':
            addEmployee();
            break;      
            
            case 'Add Employee Role':
            addRole();
            break;

            case 'Add Department':
            addEmployee();
            break;

            case 'Update Employee Role':
            updateRole();
            break;

            case 'Remove Employee':
            removeEmployee();
            break;
        }
    })
        

};

// Allow user to view all employees
function viewEmployees() {
    console.log('Employees in database');
   let query =
        'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id;';
    connection.query(query, function (err, optionChoice) {
        console.log('\n Employees in database \n');
        console.table(optionChoice);
    });
    
    employeeOptions();

}

// Allow user to view employee roles
function viewRoles() {
    connection.query('SELECT * from role', function (err, optionChoice) {
        console.log('\n Employee Roles in database \n');
        console.table(optionChoice);
    });
    
    employeeOptions();

}