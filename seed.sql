USE employee_db;

--Employee Seeds--

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Sherman", "Potter", 1, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Ben", "Pierce", 2, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "BJ", "Hunnicut", 3, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Francis", "Mulcahy", 4, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Margaret", "Houlihan", 5, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Walter", "O'Reilly", 6, 5);



--Employee Role Seeds--

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "CEO", 100000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Accountant", 90000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Salesman", 80000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "IT Manager", 70000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "HR Director", 60000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "Production Manager", 50000, 5);

--Department Seeds--

INSERT INTO department (id, name)
VALUES (1, "Corporate");

INSERT INTO department (id, name)
VALUES (2, "Sales");

INSERT INTO department (id, name)
VALUES (3, "IT");

INSERT INTO department (id, name)
VALUES (4, "HR");

INSERT INTO department (id, name)
VALUES (5, "Production");