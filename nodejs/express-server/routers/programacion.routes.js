const express = require('express');

// Routers
const { programacion } = require('../data/cursos.js').infoCursos;

const routerProgramacion = express.Router();

routerProgramacion.get('/', (req, res) => 
{
    res.send(JSON.stringify(programacion));
});


routerProgramacion.get('/:id', (req, res) => 
{
    const id = parseInt(req.params.id);
    const resultados = infoCursos.programacion.filter(curso => curso.id === id);
    console.log(resultados);

    if(resultados.length === 0)
    {
        return res.status(404).send(`No se encontraron cursos de ${id}`);
    }

    res.send(JSON.stringify(resultados));
});

module.exports = routerProgramacion;
