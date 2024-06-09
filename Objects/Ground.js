export const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


export class Ground {
    constructor(img, x, y, speed=1) {

        this.image = new Image();
        this.image.src = img.src;
        this.spriteWidth = img.width;
        this.spriteHeight = img.height;

        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = x;
        this.y = y;
        this.frame = 0;
        this.flapSpeed = speed; 
    }

    update(gameFrame){
        this.x -= this.flapSpeed

        if (this.x <= -this.width) {
            this.x = (canvas.width * 2 - this.width);
        }
    }

    draw(){
        ctx.drawImage(
            this.image, 
            this.spriteWidth * this.frame, 
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

export function defineGround(canvas){
    const groundImage = new Image();
    groundImage.src = 'assets/img/floor-pixel.png'; 
    const groundsSpeed = 2.5;


    const ground = new Ground(
        groundImage, 
        1, 
        canvas.height - groundImage.height, 
        groundsSpeed
    )
    const ground2 = new Ground(
        groundImage, 
        0 + groundImage.width - 1, 
        canvas.height - groundImage.height,
        groundsSpeed
    )

   



    return [ground, ground2]
}