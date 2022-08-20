const express = require('express');
const { infoCursos } = require('./data/cursos.js');
const app = express();
const routerMatematicas = require('./routers/matematicas.routes.js');
const routerProgramacion = require('./routers/programacion.routes.js');


app.use('/api/cursos/programacion', routerProgramacion);
app.use('/api/cursos/matematicas', routerMatematicas);

// rotas
app.get('/', (req, res) => 
{
    res.send('My first server.');
});

app.get('/api/cursos', (req, res) => 
{
    res.send(JSON.stringify(infoCursos));
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => 
{
    console.log(`Server running in PORT: ${PUERTO}`);
});
