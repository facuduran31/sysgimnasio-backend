const express = require('express');

const connection = require('../db.js');

const routerUsuarios = express.Router();

routerUsuarios.get('/', (req, res) => {
    connection.query('SELECT * FROM Usuarios', (err, results) => {
        if(err) throw res.send(err);
        res.json(results);
    });
});

module.exports = routerUsuarios;