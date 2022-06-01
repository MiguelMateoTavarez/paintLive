const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const cors = require('cors')
const http = require('http')
const app = express()


app.set('port', process.env.PORT || 5000)
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

const server = http.createServer(app)
const io = socketio(server)
require('./socket')(io)

server.listen(app.get('port'), ()=>{
    console.log('Aplicacion corriendo en el puerto: '+app.get('port'))
})