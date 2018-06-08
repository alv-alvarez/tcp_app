#!/usr/bin/env node
'use strict';

const net = require('net');
var models = require('./models');

const PORT = 1331;
const ADDRESS = '127.0.0.1';

let server = net.createServer(clientConnected);

function clientConnected(socket) {
  let clientName = `${socket.remoteAddress}:${socket.remotePort}`;

  console.log(`${clientName} conectado.`);

  socket.on('data', (data) => {
    let message = data.toString();

    models.Sensor.create({
      data: message
    });

    console.log(`${clientName} dice: ${message}`);

    socket.write(`Tenemos tu mensaje: (${message}). Gracias!\n`);
  });

  socket.on('end', () => {
    console.log(`${clientName} desconectado.`);
  });
}

server.listen(PORT, ADDRESS);


console.log(`Server started at: ${ADDRESS}:${PORT}`);