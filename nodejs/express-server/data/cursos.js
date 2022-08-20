let infoCursos = 
{
    'programacion': 
    [
        {
            id: 0,
            titulo: 'Aprender Java',
            lenguage: 'java',
            vistas: 12345,
            nivel: 'basico'
        },
        {
            id: 1,
            titulo: 'Aprende Python',
            lenguaje: 'python',
            vistas: 1500,
            nivel: 'basico'
        },
        {
            id: 2,
            titulo: 'Python intermedio',
            lenguaje: 'python',
            vistas: 13553,
            nivel: 'intermedioo'
        },
        {
            id: 3,
            titulo: 'Aprende JavaScript',
            lenguaje: 'javascript',
            vistas: 102233,
            nivel: 'basico'
        }
    ],
    'matematicas':
    [
        {
            id: 1,
            titulo: 'Aprende Calculo',
            tema: 'calculo',
            vistas: 12427,
            nivel: 'basico'
        },
        {
            id: 2,
            titulo: 'Aprende Algebra',
            tema: 'algebra',
            vistas: 15722,
            nivel: 'intermedio'
        }
    ]
}

// const id = 0;

// const resultados = infoCursos.programation.filter(curso => curso.id === id);

// console.log(resultados);

module.exports.infoCursos = infoCursos;
