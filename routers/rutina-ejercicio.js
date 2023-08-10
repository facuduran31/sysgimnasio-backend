const express = require('express');

const connection = require('../db.js');

const routerRutinaEjercicio = express.Router();

routerRutinaEjercicio.get('/', (req, res) => {
    connection.query('SELECT * FROM rutina_ejercicio', (err, results) => {
        if(err) throw res.send(err);
        res.json(results);
    });
});

routerRutinaEjercicio.get('/:idR/:idE', (req, res) => {
    const idR = req.params.idR;
    const idE = req.params.idE;

    connection.query('SELECT * FROM rutina_ejercicio WHERE idRutina = ? AND idEjercicio = ?', [idE, idR], (err, results) => 
    {
        if(err) throw res.send(err);
        res.json(results);
    });
});

routerRutinaEjercicio.post('/', (req, res) => {
    const rutiej = req.body;

    connection.query('INSERT INTO rutina_ejercicio (idRutina, idEjercicio) VALUES (?, ?)', [rutiej.idRutina, rutiej.idEjercicio], (err, results) => 
    {
        if(err) throw res.send(err);
        res.json({"mensaje": "Se insertó con éxito"});
    });
});

routerRutinaEjercicio.put('/', (req, res) => {
    const rutiej = req.body;

    connection.query('UPDATE rutina_ejercicio SET idRutina = ?, idEjercicio = ? WHERE idRutina = ? AND idEjercicio = ?', [rutiej.idRutina, rutiej.idEjercicio, rutiej.idRutina, rutiej.idEjercicio], (err, results) => {
        if(err) throw res.send(err);
        res.json({"mensaje": "Se modificó con éxito"});
    });
});

routerRutinaEjercicio.delete('/:idR/:idE', (req, res) => {
    const idR = req.params.idR;
    const idE = req.params.idE;
    
    connection.query('DELETE FROM rutina_ejercicio WHERE idRutinas = ? idEjercicio = ?', [idR, idE], (err, results) => {
        if(err) throw res.send(err);
        res.json({"mensaje:": "deleteado"});
    });
})

module.exports = routerRutinaEjercicio;