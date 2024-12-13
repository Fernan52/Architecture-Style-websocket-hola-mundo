const WebSocket = require('ws');
const http = require('http');

// Creamos un servidor HTTP
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hola Mundo WebSocket</h1>');
});

// Creamos un servidor WebSocket que se adjunta al servidor HTTP
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    console.log('Cliente conectado');

    ws.on('message', message => {
        console.log('Mensaje recibido: %s', message);
    });

    // Enviar un mensaje al cliente cuando se conecte
    ws.send('¡Bienvenido al servidor WebSocket!');
});

// Hacemos que el servidor escuche en el puerto 8080
server.listen(8080, () => {
    console.log('Servidor WebSocket escuchando en el puerto 8080');
});
