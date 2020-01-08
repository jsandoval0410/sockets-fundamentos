var socket = io();
// Escuchar procesos - on
socket.on('connect', function () {
    console.log('conectado al servidor');
});
// Escuchar procesos - on
socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información - emit
socket.emit('enviarMensaje', {
    usuario: 'Jhan',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('respuesta server:', resp);
});

// Escuchar información
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor:', mensaje);
});