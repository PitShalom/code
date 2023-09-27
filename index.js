const express = require('express');
const twilio = require ('twilio');

const app = express();
const server = require('http').createServer(app)

console.log("Escutando na porta 9991")
server.listen(9991);
