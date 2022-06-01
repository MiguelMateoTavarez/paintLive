module.exports = (io) => {
    let data = []
    let users = 0
    io.on('connection', (socket)=>{
        for (let i = 0; i < data.length; i++) {
            io.emit('show_drawing', data[i])
        }
        users += 1
        io.emit('users', users)

        socket.on('delete', ()=>{
            data = []
            io.emit('show_drawing', null)
        })
        socket.on('draw', (draw)=>{
            data.push(draw)
            io.emit('show_drawing', draw)
        })

        socket.on('disconnect', ()=>{
            users -= 1
            io.emit('users', users)
        })
    })
}