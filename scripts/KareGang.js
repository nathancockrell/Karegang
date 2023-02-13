import Game from "../WatawaeEngine/Game.js";
import Gangster from "./Gangster.js";
import Animation from "./Animation.js";
import Wall from "./Wall.js";

export default class KareGang extends Game {

    constructor(ctx) {
        super(ctx);

        this.gangster = new Gangster(3, 3, 0.1,0.1);
        // this.wall = new Wall();
    }

    update(elapsedTime) {
        // console.log(elapsedTime);

        this.tick(elapsedTime);
        this.render();
    }

    mouseDown(mouseX, mouseY) {
        const diffX = mouseX - this.gangster.x;
        const diffY = mouseY - this.gangster.y;

        const distance =Math.sqrt((diffX*diffX) + (diffY*diffY));

        this.gangster.vx = (diffX / distance)*5;
        this.gangster.vy = (diffY / distance)*5;
    }

    tick(elapsedTime) {

        if(this.keys["w"]===true) {
            this.gangster.ay = -10;
        }
        else if(this.keys["s"]===true) {
            this.gangster.ay = 10;
        }
        else {
            this.gangster.ay = 0;
        }

        if(this.keys["a"]===true) {
            this.gangster.ax = -10;
        }
        else if(this.keys["d"]===true) {
            this.gangster.ax = 10;
        }
        else {
            this.gangster.ax = 0;
        }

        this.gangster.tick(elapsedTime);
    }

    render() {
        this.ctx.fillStyle = "white";
        // this.wall.render(this.ctx, this.unitSize);
        this.ctx.fillRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.gangster.render(this.ctx, this.unitSize);
    }

}