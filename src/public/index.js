const socket = io()

let click = false
let moving_mouse = false
let x_position = 0
let y_position = 0
let previous_position = null
let color = 'black'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = window.innerWidth
const height = window.innerHeight

canvas.width = width
canvas.height = height

canvas.addEventListener('mousedown', ()=>{
    click = true
})

canvas.addEventListener('mouseup', ()=>{
    click = false
})

canvas.addEventListener('mousemove', (e)=>{
    x_position = e.clientX
    y_position = e.clientY
    moving_mouse = true
})

function create_draw(){
    if(click && moving_mouse && previous_position != null) {
        let draw = {
            x_position: x_position,
            y_position: y_position,
            color: color,
            previous_position: previous_position
        }
        socket.emit('draw', draw)
    }
    previous_position = {x_position: x_position, y_position: y_position}
    setTimeout(create_draw, 25)
}

function showDraw(draw) {
    context.beginPath()
    context.lineWidth = 3
    context.strokeStyle = draw.color
    context.moveTo(draw.x_position, draw.y_position)
    context.lineTo(draw.previous_position.x_position, draw.previous_position.y_position)
    context.stroke()
}

create_draw()