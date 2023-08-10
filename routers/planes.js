const express = require('express');

const connection = require('../db.js');

const routerPlanes = express.Router();

routerPlanes.get('/', (req, res) => {
    connection.query('SELECT * FROM Planes', (err, results) => {
        if(err) throw res.send(err);
        res.json(results);
    });
});

routerPlanes.get('/:id', (req, res) => {
    const id = req.params.id;

    connection.query('SELECT * FROM Planes WHERE idPlan = ?', [id], (err, results) => 
    {
        if(err) throw res.send(err);
        res.json(results);
    });
});

routerPlanes.post('/', (req, res) => {
    const plan = req.body;

    connection.query('INSERT INTO planes (idPlan, nombrePlan, precio) VALUES (?, ?, ?)', [plan.idPlan, plan.nombrePlan, plan.precio], (err, results) => 
    {
        if(err) throw res.send(err);
        res.json({"mensaje": "Se insertó con éxito el plan"});
    });
});

routerPlanes.put('/', (req, res) => {
    const plan = req.body;

    connection.query('UPDATE planes SET idPlan = ?, nombrePlan = ?, precio = ? WHERE idPlan = ?', [plan.idPlan, plan.nombrePlan, plan.precio, plan.idPlan], (err, results) => {
        if(err) throw res.send(err);
        res.json({"mensaje": "Se modificó con éxito el plan"});
    });
});

routerPlanes.delete('/:id', (req, res) => {
    const id = req.params.id;
    
    connection.query('DELETE FROM planes WHERE idPlan = ?', [id], (err, results) => {
        if(err) throw res.send(err);
        res.json({"mensaje:": "y se marchó..."});
    });
})

module.exports = routerPlanes;