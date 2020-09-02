const connection = require("./db.js");
const inquirer = require("inquirer");

employeeOptions();

const mysql = require("mysql2");
const conTable = require("console.table");

//Inquirer prompts for requested actions
async function employeeOptions() {
    await inquirer.prompt({
        type: "list",
        name: "employeeOptions", 
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
    }).then(({ employeeOptions }) => {
        
        console.log(employeeOptions);
    
        switch (employeeOptions) {
            case "View all employees":
                viewEmployees();
                break;
    
            case "View employee roles":
                viewRoles();
                break;

            case "View departments":
                viewDepartments();
                break;  
                
            case "Add an employee":
            addEmployee();
                break;      
            
            case "Add employee role":
            addRole();
                break;

            case "Add department":
            addDepartments();
                break;

            case "Update employee role":
            updateRole();
                break;

            case "Remove employee":
            removeEmployee();
            break;
        }
    })
        

};

// Allow user to view all employees
function viewEmployees() {
    console.log("Employees in database");
   let query =
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id;";
    connection.query(query, function (err, optionChoice) {
        console.log("\n Employees in database \n");
        console.table(optionChoice);
        employeeOptions();
    });
    

}

// Allow user to view employee roles
function viewRoles() {
    connection.query("SELECT * from role", function (err, optionChoice) {
        console.log("\n Employee Roles in database \n");
        console.table(optionChoice);
        employeeOptions();
    });
    

}
// Allow user to view departments
function viewDepartments() {
    connection.query("SELECT * from department", function (err, optionChoice) {
        console.log("\n Departments in database \n");
        console.table(optionChoice);
        employeeOptions();
    });
    

}

// Allow user to add employee to the database
function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter employee's first name",
                name: "firstname"
            },

            {
                type: "input",
                message: "Please enter employee's last name",
                name: "lastname"
            }
        ])
        .then(function (optionChoice) {
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: optionChoice.firstname,
                    last_name: optionChoice.lastname,
                    role_id: null,
                    manager_id: null
                },
                function (err, optionChoice) {
                    if (err) {
                        throw err;
                    }
                    console.table(optionChoice);
                    employeeOptions();
                }
            );
        });
    }

// Retrive employee id, first name, last name. Allow user to select employee and update role.

function updateRole() {
    let employees = [];
    let roles = [];
    connection.query("SELECT * FROM role", function (roleErr, roleChoices) {
    connection.query("SELECT * FROM employee", function (err, optionChoice) {
        for (let i = 0; i < optionChoice.length; i++) {
            let employeeString =
                optionChoice[i].id + " " + optionChoice[i].first_name + " " + optionChoice[i].last_name;
            employees.push(employeeString);
        }
        for (let i = 0; i < roleChoices.length; i++) {
            let roleString =
            roleChoices[i].id + " " + roleChoices[i].title
            roles.push(roleString);
        }
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "selectedEmployee",
                    message: "Select employee to update role",
                    choices: employees
                },
                {
                    type: "list",
                    message: "select new role",
                    choices: roles,
                    name: "newRole"
                }
            ])
            .then(function ({selectedEmployee, newRole}) {

                const idUpdate = {};
                idUpdate.employeeId = parseInt(selectedEmployee.split(" ")[0]);
                idUpdate.roleId = parseInt(newRole.split(" ")[0]);
                
                connection.query(
                    "UPDATE employee SET role_id = ? WHERE id = ?",
                    [idUpdate.roleId, idUpdate.employeeId],
                    function (err, data) {
                        console.log("Employee Role Updated");
                        employeeOptions();
                    }
                );
            });
        });
    });
}

//Remove employee
function removeEmployee() {
    let employees = [];
 
    connection.query("SELECT * FROM employee", function (err, optionChoice) {
        for (let i = 0; i < optionChoice.length; i++) {
            let employeeString =
                optionChoice[i].id + " " + optionChoice[i].first_name + " " + optionChoice[i].last_name;
            employees.push(employeeString);
        }
       
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "selectedEmployee",
                    message: "Select employee to delete",
                    choices: employees
                },
                
            ])
            .then(function ({selectedEmployee, }) {
                const employeeId = parseInt(selectedEmployee.split(" ")[0]);
                
                connection.query(
                    "UPDATE employee SET manager_id = ? WHERE manager_id = ?",
                            [null, employeeId],
                    function (err, data) {
                        
                        connection.query(
                            "DELETE FROM employee WHERE id = ?",
                    [employeeId],
                            function (err, data) {
                                
                                console.log("Employee Deleted");
                                employeeOptions();
                            }
                        );
                
                    }
                );
            });
        });

}


// Allow user to add new role
function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter employee title",
                name: "addtitle"
            },
            {
                type: "input",
                message: "Enter employee salary",
                name: "addsalary"
            },
            {
                type: "input",
                message: "Enter employee department id",
                name: "adddeptid"
            }
        ])
        .then(function (optionChoice) {
            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: optionChoice.addtitle,
                    salary: optionChoice.addsalary,
                    department_id: optionChoice.addDeptId
                },
                function (err, optionChoice) {
                    if (err) {
                        throw err;
                    }
                    console.table(optionChoice);
                    employeeOptions();
                }
            );
        });
}

// Allow user to add new department
function addDepartments() {
    inquirer
        .prompt({
            type: "input",
            message: "Enter new department name",
            name: "dept"
        })
        .then(function (optionChoice) {
            connection.query(
                "INSERT INTO department SET ?",
                {
                    name: optionChoice.dept
                },
                function (err, optionChoice) {
                    if (err) {
                        throw err;
                    }
                }
            ),
                console.table(optionChoice);
                employeeOptions();
        });
}

