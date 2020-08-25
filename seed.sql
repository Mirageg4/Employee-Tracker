USE employee_db;

--Employee Seeds--

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Betty", "White", 1, null);





--Employee Role Seeds--

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Assistant", 42000, 1);




--Department Seeds--

INSERT INTO department (id, name)
VALUES (1, "Software Development");