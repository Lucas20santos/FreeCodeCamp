// const promesaCumprida = true;
const promesaCumprida = false;


const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(promesaCumprida)
        {
            resolve('Promesa cumplida')
        }
        reject('Promesa rechazada...')
    }, 3000);
});


miPromesa
.then((valor) => {
    console.log(valor);
})
.catch((valor) => {
    console.log(valor);
})
