class Spongebob {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./sprites/spongebob.png"), 0, 0, 85, 200, 9, 0.035);
                                                                //xStart, yStart, width, height, frameCount, frameDuration
        this.x = 480;
        this.y = 0;
        this.speed = 100;

    };

    update(){
        this.y += this.speed * this.game.clockTick;
        if (this.y > 800) this.y = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
       
    };
}