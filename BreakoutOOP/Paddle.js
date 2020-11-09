class Paddle {
    constructor(canvas, x, y, width, height, color = '#fc6203') {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.canvas = canvas
    }

    render(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.canvas.height - this.height, this.width, this.height);
        ctx.fillStyle = '#fc6203';
        ctx.fill();
        ctx.closePath();
    }

    resetPaddle() {
        this.x = (this.canvas.width - this.paddleWidth) / 2;
    }
}

export default Paddle