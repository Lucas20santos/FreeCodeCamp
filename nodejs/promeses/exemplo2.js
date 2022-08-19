const fs = require('fs')

path = '/home/lucas/Documentos/Github/FreeCodeCamp/nodejs/promeses/'

fs.readFile('./arquivo.txt', 'utf-8', (err, conteudo) => {
    if(err)
    {
        throw err;
    }
    else
    {
        console.log(conteudo);
    }
});
