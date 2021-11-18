const express = require('express');
require('dotenv').config();

const server = express();
const port = process.env.PORT || 3030
const allowCors = require('./cors');

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(allowCors);

server.listen(port, () => {
    console.log(`[Server] backend is running on port ${port}`);
})

module.exports = server;