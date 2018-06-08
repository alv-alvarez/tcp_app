var net = require('net');

let client = new net.Socket();
client.connect(1331, '127.0.0.1', () => {
  console.log('Conectado');
  client.write('Hola, server! Como estas?.');
});

client.on('data', (data) => {
  console.log('Recibido: ' + data);
  client.destroy();
});

client.on('close', () => {
  console.log('Conexion cerrada');
});