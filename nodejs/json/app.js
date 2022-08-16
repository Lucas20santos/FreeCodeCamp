const curso = require("./curso.json")

// console.log(curso);
// console.log(typeof curso);


let infoCurso = {
    "titulo": "Aprender Node JS",
    "numVisitas": 45642,
    "numLikes": [
        "Javascript",
        "Node.js"
    ],
    "esPublico": true
}

// transforma em um objeto json
let infoCursoJSON = JSON.stringify(infoCurso)

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

let infoCursoObjeto = JSON.parse(infoCursoJSON)


console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

