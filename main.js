
// Obtém o elemento canvas e seu contexto
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Define as dimensões do canvas
let playerX = 100;
let playerY = 100;
let playerSpeed = 2;

// Objeto para armazenar o estado das teclas pressionadas
const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
};

function gameLoop() {
  //faz o player andar na tela de acordo com as teclas pressionadas
  if (keys.w && playerY > 0) {
    playerY -= playerSpeed;
  }

  if (keys.s && playerY < canvas.height - 50) {
    playerY += playerSpeed;
  }

  if (keys.a && playerX > 0) {
    playerX -= playerSpeed;
  }

  if (keys.d && playerX < canvas.width - 50) {
    playerX += playerSpeed;
  }

  // Limpa a tela
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenha o jogador
  ctx.fillStyle = "red";
  ctx.fillRect(playerX, playerY, 50, 50);

  // Solicita o próximo quadro
  requestAnimationFrame(gameLoop);
}

// Inicia o loop do jogo
gameLoop();

// Adiciona os eventos de teclado
document.addEventListener("keydown", function (event) {
  if (event.key in keys) {
    keys[event.key] = true;
  }
});

// Adiciona os eventos de teclado
document.addEventListener("keyup", function (event) {
  if (event.key in keys) {
    keys[event.key] = false;
  }
});
