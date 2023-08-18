// SETTINGS
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const PORT = 8080;

// ROUTERS
const routerPlanes = require('./routers/planes');
const routerUsuarios = require('./routers/usuarios');
const routerRutinas = require('./routers/rutinas');
const routerEjercicios = require('./routers/ejercicios');
const routerDescripcionEjercicio = require('./routers/descripcionEjercicio');
const routerCuotas = require('./routers/cuotas');
const routerRutinaEjercicio = require('./routers/rutina-ejercicio');
const { routerLogin, verificarToken } = require('./routers/login');


// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

// Main

app.use('/api/login', routerLogin);

app.use('/api/rutina-ejercicio', verificarToken, routerRutinaEjercicio)

app.use('/api/cuotas', verificarToken, routerCuotas);

app.use('/api/descripcionEjercicio', verificarToken, routerDescripcionEjercicio);

app.use('/api/ejercicios', verificarToken, routerEjercicios);

app.use('/api/rutinas', verificarToken, routerRutinas);

app.use('/api/usuarios', verificarToken, routerUsuarios);

app.use('/api/planes', verificarToken, routerPlanes);

app.get('/api/check-token', (req, res) => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json(false); // No hay token, no es válido
    }
  
    jwt.verify(token.split(' ')[1], SECRET_KEY, (err) => {
      if (err) {
        return res.status(200).json(false); // Token inválido
      }
  
      return res.status(200).json(true); // Token válido
    });
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/api', (req, res) => {
    res.end('El servidor funciona');
});

