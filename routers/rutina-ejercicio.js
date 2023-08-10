const express = require('express');

const connection = require('../db.js');

const routerRutinaEjercicio = express.Router();

routerRutinaEjercicio.get('/', (req, res) => {
    connection.query('SELECT * FROM rutina_ejercicio', (err, results) => {
        if(err) throw res.send(err);
        res.json(results);
    });
});

routerRutinaEjercicio.get('/:id/:id', (req, res) => {
    const id = req.params.id;

    connection.query('SELECT * FROM rutina_ejercicio WHERE idRutina = ? AND idEjercicio = ?', [id, id], (err, results) => 
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

routerRutinaEjercicio.delete('/:id/:id', (req, res) => {
    const id = req.params.id;
    
    connection.query('DELETE FROM rutina_ejercicio WHERE idRutinas = ? idEjercicio = ?', [id, id], (err, results) => {
        if(err) throw res.send(err);
        res.json({"mensaje:": "deleteado"});
    });
})

module.exports = routerRutinaEjercicio;