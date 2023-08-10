const express = require('express');

const connection = require('../db.js');

const routerEjercicios = express.Router();

routerEjercicios.get('/', (req, res) => {
    connection.query('SELECT * FROM Ejercicios', (err, results) => {
        if(err) throw res.send(err);
        res.json(results);
    });
});

routerEjercicios.get('/:id', (req, res) => {
    const id = req.params.id;

    connection.query('SELECT * FROM Ejercicios WHERE idEjercicio = ?', [id], (err, results) => 
    {
        if(err) throw res.send(err);
        res.json(results);
    });
});

routerEjercicios.post('/', (req, res) => {
    const ejercicios = req.body;

    connection.query('INSERT INTO ejercicios (idEjercicio, nombreEjercicio, urlVideo, urlImagen) VALUES (?, ?, ?, ?)', [ejercicios.idEjercicio, ejercicios.nombreEjercicio, ejercicios.urlVideo, ejercicios.urlImagen], (err, results) => 
    {
        if(err) throw res.send(err);
        res.json({"mensaje": "Se insertó con éxito la ejercicio"});
    });
});

routerEjercicios.put('/', (req, res) => {
    const ejercicios = req.body;

    connection.query('UPDATE ejercicios SET idEjercicio = ?, nombreEjercicio = ?, urlVideo = ?, urlImagen = ? WHERE idEjercicio = ?', [ejercicios.idEjercicio, ejercicios.nombreEjercicio, ejercicios.urlVideo, ejercicios.urlImagen, ejercicios.idEjercicio], (err, results) => {
        if(err) throw res.send(err);
        res.json({"mensaje": "Se modificó con éxito el ejercicio"});
    });
});

routerEjercicios.delete('/:id', (req, res) => {
    const id = req.params.id;
    
    connection.query('DELETE FROM ejercicios WHERE idEjercicio = ?', [id], (err, results) => {
        if(err) throw res.send(err);
        res.json({"mensaje:": "falleció tu ejercicio pa..."});
    });
})


module.exports = routerEjercicios;