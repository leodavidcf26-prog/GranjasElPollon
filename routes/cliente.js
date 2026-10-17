
const express = require("express");
const connection = require("../database");

const router = express.Router();


// CREAR CLIENTE
router.post("/cliente", function(req, res) {

    const { cedula, nombre, telefono, direccion, correoElectronico, estado } = req.body;

    const sql = "INSERT INTO Cliente VALUES (?, ?, ?, ?, ?, ?)";

    connection.query(
        sql,
        [cedula, nombre, telefono, direccion, correoElectronico, estado],
        function(error, results) {

            if (error) {
                console.log(error);
                res.status(500).send("Error al registrar el cliente");
            } else {
                res.send("Cliente registrado correctamente");
            }

        }
    );

});


// CONSULTAR CLIENTES
router.get("/clientes", function(req, res) {

    const sql = "SELECT * FROM Cliente";

    connection.query(
        sql,
        function(error, results) {

            if (error) {
                console.log(error);
                res.status(500).send("Error al consultar los clientes");
            } else {
                res.json(results);
            }

        }
    );

});


// ACTUALIZAR CLIENTE
router.put("/clientes/:cedula", function(req, res) {

    const { cedula } = req.params;

    const {
        nombre,
        telefono,
        direccion,
        correoElectronico,
        estado
    } = req.body;

    const sql = `
        UPDATE Cliente
        SET nombre = ?,
            telefono = ?,
            direccion = ?,
            correo_electronico = ?,
            estado = ?
        WHERE cedula = ?
    `;

    connection.query(
        sql,
        [
            nombre,
            telefono,
            direccion,
            correoElectronico,
            estado,
            cedula
        ],
        function(error, results) {

            if (error) {
                console.log(error);
                res.status(500).send("Error al actualizar el cliente");
            } else {
                res.send("Cliente actualizado correctamente");
            }

        }
    );

});

// ELIMINAR CLIENTE
router.delete("/clientes/:cedula", function(req, res) {

    const { cedula } = req.params;

    const sql = "DELETE FROM Cliente WHERE cedula = ?";

    connection.query(
        sql,
        [cedula],
        function(error, results) {

            if (error) {
                console.log(error);
                res.status(500).send("Error al eliminar el cliente");
            } else {
                res.send("Cliente eliminado correctamente");
            }

        }
    );

});

module.exports = router;