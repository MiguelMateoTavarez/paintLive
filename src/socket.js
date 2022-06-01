module.exports = (io) => {
    let data = []
    io.on('connection', (socket)=>{
        for (let i = 0; i < data.length; i++) {
            io.emit('show_drawing', data[i])
        }
        socket.on('delete', ()=>{
            data = []
            io.emit('show_drawing', null)
        })
        socket.on('draw', (draw)=>{
            data.push(draw)
            io.emit('show_drawing', draw)
        })
    })
}