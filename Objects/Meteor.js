export const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

export let meteors = []

canvas.addEventListener('click', ()=>{
    meteors.push(new Meteor());
})

export class Meteor {
    constructor(speed=5) {
        this.image = new Image();
        this.image.src = '../assets/img/meteor_frames/cometa-sprite.png'
        this.spriteWidth = 74;
        this.spriteHeight = 67;

        this.width = this.spriteWidth;
        this.height = this.spriteHeight;

        this.x = Math.random() * (canvas.width - this.width);
        this.y = -100;
        this.frame = 0;
        this.flapSpeed =speed; 
    }

    update(gameFrame){
        this.x-=1.5
        this.y+=1

      


        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 1 ? this.frame = 0 : this.frame++;
        }
    }

    draw(){

        ctx.drawImage(
            this.image, 
            74 * this.frame, 
            0, 
            this.spriteWidth, 
            this.spriteHeight, 
            this.x, 
            this.y, 
            this.width, 
            this.height
          );
    }
}