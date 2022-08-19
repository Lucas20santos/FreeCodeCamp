const http = require('http')

const servidor = http.createServer((req, res) => 
{
    console.log('solicitud nueva');
    res.end('Hola, mundo')
});

const puerto = 3000;

servidor.listen(puerto, () => 
{
    console.log(`server running in http://localhost:${puerto}`);
});
