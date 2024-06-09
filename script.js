/** @type {HTMLCanvasElement} */
import { defineClouds } from './Objects/DefineClouds.js'
import { defineGround } from './Objects/Ground.js';
import { meteors } from './Objects/Meteor.js';
export const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const background = new Image();
background.src = 'assets/img/with-no-clouds.png'; 

let gameFrame = 0;

const clouds = defineClouds(canvas)
const grounds = defineGround(canvas)



function drawBackground() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

 
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();

    [...meteors, ...clouds, ...grounds].forEach(object=> {
        object.update(gameFrame);
        object.draw();
    })
    

    requestAnimationFrame(animate);
    gameFrame++
}

animate();
