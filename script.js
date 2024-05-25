// Seleciona o canvas e define o contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Configurações da imagem do solo
const groundImage = new Image();
groundImage.src = 'assets/img/floor-pixel.png'; 
const background = new Image();
background.src = 'assets/img/with-no-clouds.png'; 

let groundX = 0;

// Configurações das nuvens
const clouds1 = new Image();
clouds1.src = 'assets/img/clouds-1.png'; 

const clouds2 = new Image();
clouds2.src = 'assets/img/clouds-2.png'; 

const clouds3 = new Image();
clouds3.src = 'assets/img/clouds-3.png'; 

const clouds4 = new Image();
clouds4.src = 'assets/img/clouds-4.png'; 

const clouds5 = new Image();
clouds5.src = 'assets/img/clouds-5.png'; 

const cloudObjects = [
    { img: clouds1, x: (canvas.width - clouds1.width)/2, y: (canvas.height - clouds1.height) / 2, speed: 0.1 },
    { img: clouds2, x: (canvas.width - clouds2.width)/2 + -390, y: (canvas.height - clouds2.height) / 2, speed: 0.1 },
    { img: clouds3, x: (canvas.width - clouds3.width)/2 - 700, y: (canvas.height - clouds3.height) / 2, speed: 0.1 },
    { img: clouds4, x: (canvas.width - clouds4.width)/2 + 680, y: (canvas.height - clouds4.height) / 2, speed: 0.05 },
    { img: clouds5, x: (canvas.width - clouds5.width)/2 + 380, y: (canvas.height - clouds5.height) / 2, speed: 0.2 }
];

function drawGround(speed) {
    // Desenha a imagem do solo
    ctx.drawImage(groundImage, groundX, canvas.height - groundImage.height);
    ctx.drawImage(groundImage, groundX + groundImage.width - 1, canvas.height - groundImage.height);

    // Move a posição da imagem do solo
    groundX -= speed;

    // Reseta a posição quando a imagem sair da tela
    if (groundX <= -groundImage.width) {
        groundX = 0;
    }
}

function drawBackground() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

function drawCloud(cloud) {
    // Atualiza a posição da nuvem
    cloud.x -= cloud.speed;

    // Reseta a posição da nuvem quando sair da tela
    if (cloud.x > canvas.width) {
        cloud.x = -cloud.img.width;
    }

    if (cloud.x + cloud.img.width < 0) {
        cloud.x = canvas.width 
    }

    console.log(cloud.x)

    // Desenha a nuvem
    ctx.drawImage(cloud.img, cloud.x, cloud.y);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    drawBackground();
    drawGround(2.5);

    // Desenha e move as nuvens
    cloudObjects.forEach(drawCloud);

    // Chama a função novamente para o próximo frame
    requestAnimationFrame(animate);
}

animate();
