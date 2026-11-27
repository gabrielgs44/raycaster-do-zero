// Obtém o elemento canvas e seu contexto
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Variáveis para armazenar a posição e velocidade do jogador
class Player {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.speed = 2;
  }

  // Métodos para mover o jogador
  moveRight(){
    this.x += this.speed;
  }

  moveLeft(){
    this.x -= this.speed;
  }

  moveUp(){
    this.y -= this.speed;
  }

  moveDown(){
    this.y += this.speed;
  }
}

// cria o objeto player
const player = new Player();

// Objeto para armazenar o estado das teclas pressionadas
const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
};

function gameLoop() {
  //faz o player andar na tela de acordo com as teclas pressionadas
  if (keys.w && player.y > 0) {
    player.moveUp();
  }

  // Limita o movimento do jogador para não sair da tela
  if (keys.s && player.y < canvas.height - 50) {
    player.moveDown();
  }

  if (keys.a && player.x > 0) {
    player.moveLeft();
  }

  if (keys.d && player.x < canvas.width - 50) {
    player.moveRight();
  }

  // Limpa a tela
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenha o jogador
  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y, 50, 50);

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
