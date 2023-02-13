import Game from "../WatawaeEngine/Game.js";
import Gangster from "./Gangster.js";

export default class KareGang extends Game {

    constructor(ctx) {
        super(ctx);

        this.gangster = new Gangster(3, 3, 0.1,0.1);
    }

    update(elapsedTime) {
        // console.log(elapsedTime);

        this.tick(elapsedTime);
        this.render();
    }

    mouseDown(mouseX, mouseY) {
        this.gangster.vx = mouseX - this.gangster.x;
        this.gangster.vy = mouseY - this.gangster.y;

        const distance = (this.gangster.vx*this.gangster.vx) + (this.gangster.vy*this.gangster*vy);

        this.gangster.vx/=distance;
        this.gangster.vy/=distance;
    }

    tick(elapsedTime) {
        this.gangster.tick(elapsedTime);
    }

    render() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.gangster.render(this.ctx, this.unitSize);
    }

}