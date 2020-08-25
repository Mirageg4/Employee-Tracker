DROP DATABASE IF EXISTS employee_DB;
CREATE DATABASE employee_DB;

USE employee_DB;


--Employee Table--
CREATE TABLE employee
(
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    lasst_name VARCHAR(30),
    role_id INT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);
    
CREATE TABLE role
(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL (9,2)
    department_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (department_id) REFERENCES (department_id)
);

CREATE TABLE department
(
    id INT AUTO_INCREMENT,
    name VARCHAR(30)
    PRIMARY KEY(id)

);