const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "mirageg411",
    database: "employee_db",
});


connection.connect(function(err) {
    if (err) { 
        console.log("Database Connection Error", err.message)
        process.exit(1)
    };
});

module.exports = connection;