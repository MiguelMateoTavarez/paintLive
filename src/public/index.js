const socket = io()

let click = false
let moving_mouse = false
let x_position = 0
let y_position = 0
let previous_position = {x_position: 0, y_position: 0}
let color = 'black'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const width = window.innerWidth
const height = window.innerHeight

canvas.width = width
canvas.height = height

canvas.addEventListener('mousedown', ()=>{
    console.log('Esta dando click')
})