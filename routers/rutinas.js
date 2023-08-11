const express = require('express');

const connection = require('../db.js');

const routerRutinas = express.Router();

routerRutinas.get('/', (req, res) => {
    connection.query('SELECT * FROM Rutinas', (err, results) => {
        if(err) throw res.send(err);
        res.json(results);
    });
});

routerRutinas.get('/:id', (req, res) => {
    const id = req.params.id;

    connection.query('SELECT * FROM Rutinas WHERE idRutina = ?', [id], (err, results) => 
    {
        if(err) throw res.send(err);
        res.json(results);
    });
});

routerRutinas.post('/', (req, res) => {
    const rutina = req.body;

    connection.query('INSERT INTO rutinas (idRutina, nombreRutina, cantidadDias) VALUES (?, ?, ?)', [rutina.idRutina, rutina.nombreRutina, rutina.cantidadDias], (err, results) => 
    {
        if(err) throw res.send(err);
        res.json({"mensaje": "Se insertó con éxito la rutina"});
    });
});

routerRutinas.put('/', (req, res) => {
    const rutina = req.body;

    connection.query('UPDATE rutinas SET idRutina = ?, nombreRutina = ?, cantidadDias = ? WHERE idRutina = ?', [rutina.idRutina, rutina.nombreRutina, rutina.cantidadDias, rutina.idRutina], (err, results) => {
        if(err) throw res.send(err);
        res.json({"mensaje": "Se modificó con éxito la rutina"});
    });
});

routerRutinas.delete('/:id', (req, res) => {
    const id = req.params.id;
    
    connection.query('DELETE FROM rutinas WHERE idRutina = ?', [id], (err, results) => {
        if(err) throw res.send(err);
        res.json({"mensaje:": "chau tu rutina pa..."});
    });
})

module.exports = routerRutinas;