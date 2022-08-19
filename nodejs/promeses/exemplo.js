const statusPedido = () => {
    const status = Math.random() < 0.8;
    console.log(status);
    return status
};

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(statusPedido()) 
        {
            resolve("Pedido exitoso! Su pizza esta en camino");
        }
        else
        {
            reject("Ocurrio un error. Por favor intente nuevamente.");
        }
    }, 3000);
});

// const manejarPedido = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
// }

// const rechazarPedido = (mensajeDeError) => {
//     console.log(mensajeDeError);
// }

// miPedidoDePizza.then(manejarPedido, rechazarPedido);

miPedidoDePizza.then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
})
// .then(null, (mensajeDeError) => {
//     console.log(mensajeDeError);
// })
.catch((mensajeDeError) => {
    console.log(mensajeDeError);
})

