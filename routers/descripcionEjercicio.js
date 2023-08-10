const express = require('express');

const connection = require('../db.js');

const routerDescripcionEjercicio = express.Router();

routerDescripcionEjercicio.get('/', (req, res) => {
    connection.query('SELECT * FROM descripcionejercicio', (err, results) => {
        if(err) throw res.send(err);
        res.json(results);
    });
});

routerDescripcionEjercicio.get('/:id', (req, res) => {
    const id = req.params.id;

    connection.query('SELECT * FROM descripcionejercicio WHERE idDescripcionEjercicio = ?', [id], (err, results) => 
    {
        if(err) throw res.send(err);
        res.json(results);
    });
});

routerDescripcionEjercicio.post('/', (req, res) => {
    const ejercicios = req.body;

    connection.query('INSERT INTO descripcionejercicio (idDescripcionEjercicio, idEjercicio, cantidadSeries, cantidadRepeticiones, tiempoDescanso) VALUES (?, ?, ?, ?, ?)', [ejercicios.idDescripcionEjercicio, ejercicios.idEjercicio, ejercicios.cantidadSeries, ejercicios.cantidadRepeticiones, ejercicios.tiempoDescanso], (err, results) => 
    {
        if(err) throw res.send(err);
        res.json({"mensaje": "Se insertó con éxito la descripciom del ejercicio"});
    });
});

routerDescripcionEjercicio.put('/', (req, res) => {
    const ejercicios = req.body;

    connection.query('UPDATE descripcionejercicio SET idDescripcionEjercicio = ?, idEjercicio = ?, cantidadSeries = ?, cantidadRepeticiones = ?, tiempoDescanso = ? WHERE idDescripcionEjercicio = ?', [ejercicios.idDescripcionEjercicio, ejercicios.idEjercicio, ejercicios.cantidadSeries, ejercicios.cantidadRepeticiones, ejercicios.tiempoDescanso, ejercicios.idDescripcionEjercicio], (err, results) => {
        if(err) throw res.send(err);
        res.json({"mensaje": "Se modificó con éxito la descripcion ejercicio"});
    });
});

routerDescripcionEjercicio.delete('/:id', (req, res) => {
    const id = req.params.id;
    
    connection.query('DELETE FROM descripcionejercicio WHERE idDescripcionEjercicio = ?', [id], (err, results) => {
        if(err) throw res.send(err);
        res.json({"mensaje:": "pereció tu descripcion de ejercicio pa..."});
    });
})


module.exports = routerDescripcionEjercicio;
