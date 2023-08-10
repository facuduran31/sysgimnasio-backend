const express = require('express');

const connection = require('../db.js');

const routerUsuarios = express.Router();

routerUsuarios.get('/', (req, res) => {
    connection.query('SELECT * FROM Usuarios', (err, results) => {
        if(err) throw res.send(err);
        res.json(results);
    });
});

routerUsuarios.get('/:id', (req, res) => {
    const id = req.params.id;

    connection.query('SELECT * FROM Usuarios WHERE idUsuario = ?', [id], (err, results) => 
    {
        if(err) throw res.send(err);
        res.json(results);
    });
});

routerUsuarios.post('/', (req, res) => {
    const user = req.body;

    connection.query('INSERT INTO usuarios (idUsuario, numeroDocumento, nombreApellido, fechaNacimiento, numeroTelefono, email, idPlan, idRutina, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [user.idUsuario, user.numeroDocumento, user.nombreApellido, user.fechaNacimiento, user.numeroTelefono, user.email, user.idPlan, user.idRutina, user.password], (err, results) => 
    {
        if(err) throw res.send(err);
        res.json({"mensaje": "Se insertó con éxito el usuario"});
    });
});

routerUsuarios.put('/', (req, res) => {
    const user = req.body;

    connection.query('UPDATE usuarios SET idUsuario = ?, numeroDocumento = ?, nombreApellido = ?, fechaNacimiento = ?, numeroTelefono = ?, email = ?, idPlan = ?, idRutina = ?, password = ? WHERE idUsuario = ?', [user.idUsuario, user.numeroDocumento, user.nombreApellido, user.fechaNacimiento, user.numeroTelefono, user.email, user.idPlan, user.idRutina, user.password, user.idUsuario], (err, results) => {
        if(err) throw res.send(err);
        res.json({"mensaje": "Se modificó con éxito el usuario"});
    });
});

routerUsuarios.delete('/:id', (req, res) => {
    const id = req.params.id;z
    
    connection.query('DELETE FROM usuarios WHERE idUsuario = ?', [id], (err, results) => {
        if(err) throw res.send(err);
        res.json({"mensaje:": "deletado pa..."});
    });
})

module.exports = routerUsuarios;