const http = require('http')
const { infoCursos } = require('./cursos');

const servidor = http.createServer((req, res) => 
{
    const { method } = req;

    switch(method)
    {
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        case 'PUT':
            return manejarSolicitudPUT(req, res);
        case 'DELETE':
            return manejarSolicitudDELETE(req, res);
        default:
            console.log(`El metodo usado no puede ser manejado por el servidor: ${method}`);
    }
});


function manejarSolicitudGET(req, res)
{
    const path = req.url;

    if(path === "/")
    {
        res.statusCode = 200;
        return res.end('Bienvenidos a mi primmer servidor y API creados con Nodejs');
    }
    else if(path === "/cursos")
    {
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos));
    }
    else if(path === "/cursos/programation")
    {
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos.programation));
    }
    else if(path === "/cursos/matematicas")
    {
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos.matematicas));
    }
    else
    {
        res.statusCode = 404;
        return res.end('El recurso solicitado no existe...');
    }
}

function manejarSolicitudPOST(req, res)
{
    const path = req.url;


    if (path === "/cursos/programation")
    {
        res.statusCode = 200;
        return res.end('El servidor recibio una solicitud POST para /cursos/programation');
    }
}




const PUERTA = 3000;

servidor.listen(PUERTA, () =>
{
    console.log(`Server running in http://localhost:${PUERTA}`);
});
