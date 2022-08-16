const EventsEmitter = require('events')


// console.log(EventsEmitter);

const emisorProductos = new EventsEmitter();

emisorProductos.on('compra', () => {
    console.log("Se realizo una compra");
});

emisorProductos.emit('compra')
emisorProductos.emit('compra')
emisorProductos.emit('compra')
