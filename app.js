// SETTINGS
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const PORT = 8080;

// ROUTERS
const routerPlanes = require('./routers/planes');
const routerUsuarios = require('./routers/usuarios');
const routerRutinas = require('./routers/rutinas')

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

// Main

app.use('/api/rutinas', routerRutinas);

app.use('/api/usuarios', routerUsuarios);

app.use('/api/planes', routerPlanes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/api', (req, res) => {
    res.end('El servidor funciona');
});
