
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nazosena1234",
    database: "granjas_el_pollon"
});

connection.connect(function(error) {
    if (error) {
        console.log("Error al conectar con MySQL:", error);
    } else {
        console.log("Conexión exitosa con MySQL");
    }
}); 

connection.query("SHOW TABLES", function(error, results) {
    if (error) {
        console.log("Error al consultar las tablas:", error);
    } else {
        console.log("Tablas de la base de datos:");
        console.log(results);
    }
});

connection.query("DESCRIBE Cliente", function(error, results) {
    if (error) {
        console.log("Error al consultar Cliente:", error);
    } else {
        console.log("Estructura de la tabla Cliente:");
        console.log(results);
    }
});

module.exports = connection;