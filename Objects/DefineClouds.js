import { Cloud } from './Cloud.js'


export function defineClouds(canvas){
    const twoCloudsWithBigger = new Image();
    twoCloudsWithBigger.src = 'assets/img/clouds/clouds-1.png'; 

    const biggerCloud = new Image();
    biggerCloud.src = 'assets/img/clouds/clouds-2.png'; 

    const VariousClouds = new Image();
    VariousClouds.src = 'assets/img/clouds/clouds-3.png'; 

    const clouds4 = new Image();
    clouds4.src = 'assets/img/clouds/clouds-4.png'; 

    const clouds5 = new Image();
    clouds5.src = 'assets/img/clouds/clouds-5.png'; 
    
    const clouds6 = new Image();
    clouds6.src = 'assets/img/clouds/clouds-6.png'; 

    const clouds7 = new Image();
    clouds7.src = 'assets/img/clouds/clouds-7.png'; 


    const cloudsConfig =  [
        {  
            img: twoCloudsWithBigger, 
            x: (canvas.width - twoCloudsWithBigger.width) / 2, 
            y: (canvas.height - twoCloudsWithBigger.height) / 2, 
            speed: 0.55 
        },
        { img: biggerCloud, x: (canvas.width - biggerCloud.width)/2 + -390, y: (canvas.height - biggerCloud.height) / 2, speed: 0.25 },
        { img: VariousClouds, x: (canvas.width - VariousClouds.width)/2 - 700, y: (canvas.height - VariousClouds.height) / 2 -90, speed: 0.2 },
        { img: clouds4, x: (canvas.width - clouds4.width)/2 + 680, y: (canvas.height - clouds4.height) / 2, speed: 0.25 },
        { img: clouds5, x: (canvas.width - clouds5.width)/2 + 380, y: (canvas.height - clouds5.height) / 2, speed: 0.45 },
        { img: clouds6, x: (canvas.width - clouds6.width)/2 + 480, y: (canvas.height - clouds6.height) / 2 - 100, speed: 0.3},
        { img: clouds7, x: (canvas.width - clouds7.width)/2 + 380, y: (canvas.height - clouds7.height) / 2, speed: 0.35 }
    ].map(cloudConfig=> 
         new Cloud(cloudConfig.img, cloudConfig.x, cloudConfig.y, cloudConfig.speed)
    )

    return  cloudsConfig
}
