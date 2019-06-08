const express = require('express')
const server = express()
const middleWareConfig = require('./config/middleware')
const { studentRouter, postRouter, authRouter } = require('./api/routers')

middleWareConfig(server);
server.use(express.json())


// use routers
server.use('/students', studentRouter);
server.use('/posts', postRouter);
server.use('/auth', authRouter);

// sanity test
server.get('/', (req, res) => {
    res.status(200).json('<h1>Hello World</h1>');
})

module.exports = server;