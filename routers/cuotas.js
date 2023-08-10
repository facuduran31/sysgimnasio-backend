const express = require('express');

const connection = require('../db.js');

const routerCuotas = express.Router();

routerCuotas.get('/', (req, res) => {
    connection.query('SELECT * FROM Cuotas', (err, results) => {
        if(err) throw res.send(err);
        res.json(results);
    });
});

routerCuotas.get('/:id', (req, res) => {
    const id = req.params.id;

    connection.query('SELECT * FROM Cuotas WHERE idCuota = ?', [id], (err, results) => 
    {
        if(err) throw res.send(err);
        res.json(results);
    });
});

routerCuotas.post('/', (req, res) => {
    const cuota = req.body;

    connection.query('INSERT INTO cuotas (idCuota, fechaPago, monto, idUsuario) VALUES (?, ?, ?, ?)', [cuota.idCuota, cuota.fechaPago, cuota.monto, cuota.idUsuario], (err, results) => 
    {
        if(err) throw res.send(err);
        res.json({"mensaje": "Se insertó con éxito la cuota"});
    });
});

routerCuotas.put('/', (req, res) => {
    const cuota = req.body;

    connection.query('UPDATE cuotas SET idCuota = ?, fechaPago = ?, monto = ?, idUsuario = ? WHERE idUsuario = ?', [cuota.idCuota, cuota.fechaPago, cuota.monto, cuota.idUsuario, cuota.idUsuario], (err, results) => {
        if(err) throw res.send(err);
        res.json({"mensaje": "Se modificó con éxito la cuota"});
    });
});

routerCuotas.delete('/:id', (req, res) => {
    const id = req.params.id;
    
    connection.query('DELETE FROM cuotas WHERE idUsuario = ?', [id], (err, results) => {
        if(err) throw res.send(err);
        res.json({"mensaje:": "cuota borrada..."});
    });
})

module.exports = routerCuotas;