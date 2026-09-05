const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const bestEl = document.getElementById("best");
const overlay = document.getElementById("overlay");
const startBtn = document.getElementById("startBtn");

const WIDTH = 600;
const HEIGHT = 400;
const SNAKE_SIZE = 10;
const SPEED = 100;

const COLORS = {
    background: "#141414",
    snake: '#00ff7f',
    food: "#ff4136",
    text: "#ffffff",
    score: "#ffd700"
};

class Snake {
    constructor() {
        this.length = 1;
        this.body = [{ x: WIDTH / 2, y: HEIGHT / 2 }];
        this.direction = { x: 0, y: 0 };
    }

    update() {
        let head = this.body[this.body.length - 1];
        let newHead = {
            x: head.x + this.direction.x,
            y: head.y + this.direction.y
        };
        this.body.push(newHead);
        if (this.body.length > this.length) {
            this.body.shift();
        }
    }

    draw() {
        ctx.fillStyle = COLORS.snake;
        this.body.forEach(function (block) {
            ctx.fillRect(block.x, block.y, SNAKE_SIZE, SNAKE_SIZE);
        });
    }

    hasCollided() {
        let head = this.body[this.body.length - 1];
        if (head.x >= WIDTH || head.x < 0 || head.y >= HEIGHT || head.y < 0) {
            return true;
        }
        for (let i = 0; i < this.body.length - 1; i++) {
            if (head.x === this.body[i].x && head.y === this.body[i].y) {
                return true;
            }
        }
        return false;
    }
}

class Food {
    constructor() {
        this.pos = this.randomizePos();
    }

    randomizePos() {
        let x = Math.floor(Math.random() * (WIDTH / SNAKE_SIZE)) * SNAKE_SIZE;
        let y = Math.floor(Math.random() * (HEIGHT / SNAKE_SIZE)) * SNAKE_SIZE;
        return { x, y };
    }

    draw() {
        ctx.fillStyle = COLORS.food;
        ctx.fillRect(this.pos.x, this.pos.y, SNAKE_SIZE, SNAKE_SIZE);
    }
}

class Game {
    constructor() {
        this.highScore = parseInt(localStorage.getItem("snakeHighScore") || "0", 10);
        bestEl.textContent = this.highScore;
        this.running = false;
        this.gameLoop = null;
        this.resetGame();
        this.setupControls();
    }

    resetGame() {
        this.snake = new Snake();
        this.food = new Food();
        this.score = 0;
        scoreEl.textContent = this.score;
    }

    saveHighScore() {
        localStorage.setItem("snakeHighScore", this.highScore);
        bestEl.textContent = this.highScore;
    }

    start() {
        if (this.running) return;
        overlay.classList.add("hidden");
        this.running = true;
        this.gameLoop = setInterval(() => this.update(), SPEED);
    }

    stop() {
        this.running = false;
        clearInterval(this.gameLoop);
    }

    gameOver() {
        this.stop();
        if (this.score > this.highScore) {
            this.highScore = this.score;
            this.saveHighScore();
        }
        overlay.classList.remove("hidden");
        overlay.querySelector("h2").textContent = "Game Over!";
        overlay.querySelector("p").textContent = "Score: " + this.score + " — Press Start to play again";
        this.resetGame();
    }

    update() {
        this.snake.update();

        if (this.snake.hasCollided()) {
            this.gameOver();
            return;
        }

        let head = this.snake.body[this.snake.body.length - 1];
        if (head.x === this.food.pos.x && head.y === this.food.pos.y) {
            this.snake.length++;
            this.score++;
            scoreEl.textContent = this.score;
            this.food.pos = this.food.randomizePos();
        }

        ctx.fillStyle = COLORS.background;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        this.food.draw();
        this.snake.draw();
    }

    setupControls() {
        document.addEventListener("keydown", (event) => {
            if (event.code === "Space") {
                event.preventDefault();
                if (!this.running) {
                    overlay.querySelector("h2").textContent = "SNAKE PRO";
                    this.start();
                }
                return;
            }

            if (!this.running) return;

            switch (event.key) {
                case "ArrowLeft":
                    if (this.snake.direction.x === 0) {
                        this.snake.direction = { x: -SNAKE_SIZE, y: 0 };
                    }
                    break;
                case "ArrowRight":
                    if (this.snake.direction.x === 0) {
                        this.snake.direction = { x: SNAKE_SIZE, y: 0 };
                    }
                    break;
                case "ArrowUp":
                    if (this.snake.direction.y === 0) {
                        this.snake.direction = { x: 0, y: -SNAKE_SIZE };
                    }
                    break;
                case "ArrowDown":
                    if (this.snake.direction.y === 0) {
                        this.snake.direction = { x: 0, y: SNAKE_SIZE };
                    }
                    break;
            }
        });

        startBtn.addEventListener("click", () => {
            overlay.querySelector("h2").textContent = "SNAKE PRO";
            this.start();
        });
    }
}

const game = new Game();
