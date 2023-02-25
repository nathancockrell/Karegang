import Game from "../WatawaeEngine/Game.js";
import Gangster from "./Gangster.js";
import Wall from "./Wall.js";
import Karen from "./Karen.js";
import Graphics from "../WatawaeEngine/Graphics.js";

export default class KareGang extends Game {

    constructor(ctx) {
        super(ctx);

        this.gangster = new Gangster(3, 3, 0.1,0.1);
        this.karens = [];
        this.bullets = [];

        for(let i = 0; i < 3; i++) {
            this.karens.push(new Karen(Math.random()*9+2, Math.random()*5+2, Math.random()-0.5, Math.random()-0.5));
            //  this.karens.push(new Karen(2, 2, 0, 0));
        }
        // this.wall = new Wall();


        Graphics.add("gangsterLeft", "./assets/images/player1LeftShotgun.png");
        Graphics.add("gangsterRight", "./assets/images/player1RightShotgun.png");
        Graphics.add("wall","./assets/images/wall.png");
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

        this.bullets.push(new Karen(this.gangster.x, this.gangster.y, (diffX / distance)*5, (diffY / distance)*5));
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
        for(let i = 0; i < this.karens.length; i++) {


            const diffX = this.gangster.x - this.karens[i].x;
            const diffY =  this.gangster.y - this.karens[i].y;
    
            const distance =Math.sqrt((diffX*diffX) + (diffY*diffY));
    
            this.karens[i].vx = (diffX / distance)*1;
            this.karens[i].vy = (diffY / distance)*1;


            this.karens[i].tick(elapsedTime);
        }

        for(let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].tick(elapsedTime);
        }

        this.gangster.tick(elapsedTime);
    }

    render() {
        this.ctx.fillStyle = "white";
        // this.wall.render(this.ctx, this.unitSize);
        this.ctx.fillRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);


        for(let i = 0; i < this.karens.length; i++) {
            this.karens[i].render(this.ctx, this.unitSize);
        }
        for(let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].render(this.ctx, this.unitSize);
        }

        this.gangster.render(this.ctx, this.unitSize);
    }

}