const http = require('http');

// criando um servidor
const servidor = http.createServer((req, res) => 
{
    console.log('====> req (solicitud');
    
    // requisições
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);


    // resposta
    res.statusCode = 404;
    console.log(res.statusCode);
    res.setHeader('content-type', 'application/json');
    res.getHeader();
});

// porta que o servidor vai rodar
const puerto = 3000;

// chamando o método listen e passando dois parâmentro
// porta e uma função flecha que printa uma mensaem no terminal
servidor.listen(puerto, () => 
{
    console.log(`Server running in http://localhost:${puerto}`);
});
