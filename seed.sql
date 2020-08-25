USE employee_db;

--Employee Seeds--

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Sherman", "Potter", 1, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Ben", "Pierce", 1, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "BJ", "Hunnicut", 1, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Francis", "Mulcahy", 1, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Francis", "Mulcahy", 1, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Margaret", "Houlihan", 1, null);



--Employee Role Seeds--

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "CEO", 100000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Accountant", 100000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Salesman", 100000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "IT Manager", 100000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "HR Director", 100000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "Production Manager", 100000, 1);

--Department Seeds--

INSERT INTO department (id, name)
VALUES (1, "Corporate");

INSERT INTO department (id, name)
VALUES (2, "Sales");

INSERT INTO department (id, name)
VALUES (3, "IT");

INSERT INTO department (id, name)
VALUES (4, "IT");