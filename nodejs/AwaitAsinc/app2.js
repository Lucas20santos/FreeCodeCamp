function ordenarProducto(producto) 
{
    return new Promise((resolve, reject) => 
    {
        console.log(`Ordenando: ${producto} de freeCodeCamp`);
        setTimeout(() => 
        {
            if (producto === 'taza')
            {
                resolve('Ordenadno una taza ccomm el ogo de freeCodeCamp')
            }
            else
            {
                reject('Este producto no esta disponible actualmente.')
            }
        }, 2000);
    });
}

function processaPedido(respuesta) 
{
    return new Promise(resolve => 
    {
        console.log("Procesando respuesta...");
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(() => {
            resolve('Gracias por tu compra. Disfruta tu producto de freeCodeCamp.')
        }, 4000);
    });
}

async function realizarPedido(producto)
{
    try 
    {
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta recebida');
        const respuestaProcesada = await processaPedido(respuesta);
        console.log(respuestaProcesada);

    } catch (error) 
    {
        console.log(error);    
    }
}

realizarPedido('taza');
