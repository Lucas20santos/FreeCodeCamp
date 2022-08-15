const fs = require('fs')

/* trabalhar com arquivos
    - Leer
    - Modificar
    - Copiar
    - Eliminar
    - Trocar o nome
*/


// fs.readFile('/home/lucas/Documentos/Github/FreeCodeCamp/modulosBuildIn/index.html', 'utf-8', (err, contenido) =>{
//     if(err)
//     {
//         throw err;
//         // console.log(err);
//     }
//     else
//     {
//         console.log(contenido);
//     }
// })


// fs.rename('modulosBuildIn/index.html', 'modulosBuildIn/main.html', (err) => {
//     if(err)
//     {
//         throw err
//     }
//     console.log("Nombre cambiado exitosam");
// })


// fs.appendFile('modulosBuildIn/main.html', '<p>Hola</p>', (err) => {
//     if(err)
//     {
//         throw err
//     }
//     console.log("archivo actualizado");
// })


// fs.writeFile('modulosBuildIn/main.html', 'contenido nuevo', (err) => {
//     if(err)
//     {
//         throw err
//     }
//     console.log("contenido reemplazado exitosamente");
// })



// fs.unlink('modulosBuildIn/main.html', (err) => {
//     if(err)
//     {
//         throw err
//     }
//     console.log("Archivo eliminado");
// })
