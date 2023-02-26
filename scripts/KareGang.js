import Game from "../WatawaeEngine/Game.js";
import Gangster from "./Gangster.js";
import Wall from "./Wall.js";
import Karen from "./Karen.js";
import Graphics from "../WatawaeEngine/Graphics.js";
import TileMap from "../WatawaeEngine/TileMap.js";

export default class KareGang extends Game {

    constructor(ctx) {
        super(ctx);
        this.gameObjects = [];

        this.gameObjects.push(new Gangster(3, 3, 0.1,0.1));
        for(let i = 0; i < 3; i++) {
            this.gameObjects.push(new Karen(Math.random()*9+2, Math.random()*5+2, Math.random()-0.5, Math.random()-0.5));
            //  this.karens.push(new Karen(2, 2, 0, 0));
        }
        // this.wall = new Wall();
        this.tilemap = new TileMap(0,0,"");

        Graphics.add("gangsterLeft", "./assets/images/player1LeftShotgun.png");
        Graphics.add("gangsterRight", "./assets/images/player1RightShotgun.png");
        Graphics.add("karen1Left", "./assets/images/karen1Left.png");
        Graphics.add("karen1LeftWalk", "./assets/images/karen1LeftWalk.png");
        Graphics.add("karen1Right", "./assets/images/karen1Right.png");
        Graphics.add("karen1RightWalk", "./assets/images/karen1RightWalk.png");
        // Graphics.add("wall","./assets/images/wall.png");
        Graphics.add("grass", "./assets/images/grassTiles.png");
        Graphics.add("wall", "./assets/images/wallTiles.png");
    }

    update(elapsedTime) {
        // console.log(elapsedTime);
        console.log((1/elapsedTime)*60);
        this.tick(elapsedTime);
        this.render();
    }

    mouseDown(mouseX, mouseY) {
        const diffX = mouseX+this.camera.x - this.gameObjects[0].x;
        const diffY = mouseY+this.camera.y - this.gameObjects[0].y;

        const distance =Math.sqrt((diffX*diffX) + (diffY*diffY));

        this.gameObjects.push(new Karen(this.gameObjects[0].x, this.gameObjects[0].y, (diffX / distance)*5, (diffY / distance)*5));
    }

    tick(elapsedTime) {

        if(this.keys["w"]===true) {
            this.gameObjects[0].ay = -10;
        }
        else if(this.keys["s"]===true) {
            this.gameObjects[0].ay = 10;
        }
        else {
            this.gameObjects[0].ay = 0;
        }

        if(this.keys["a"]===true) {
            this.gameObjects[0].ax = -10;
        }
        else if(this.keys["d"]===true) {
            this.gameObjects[0].ax = 10;
        }
        else {
            this.gameObjects[0].ax = 0;
        }
        for(let i = 0; i < this.gameObjects.length; i++) {

            if(this.gameObjects[i].type == "karen") {
            const diffX = this.gameObjects[0].x - this.gameObjects[i].x;
            const diffY =  this.gameObjects[0].y - this.gameObjects[i].y;
    
            const distance =Math.sqrt((diffX*diffX) + (diffY*diffY));
    
            this.gameObjects[i].vx = (diffX / distance)*1;
            this.gameObjects[i].vy = (diffY / distance)*1;
            
            }

            this.gameObjects[i].tick(elapsedTime);
        }

        //Collisions
        for(let i = 0; i < this.gameObjects.length; i++) {
            for(let j = i+1; j < this.gameObjects.length; j++) {
                this.gameObjects[i].checkCollision(this.gameObjects[j])
            }
            this.tilemap.checkCollision(this.gameObjects[i]);
        }

        this.camera.follow(this.gameObjects[0]);
    }

    render() {
        this.ctx.fillStyle = "black";
        // this.wall.render(this.ctx, this.unitSize);
        this.ctx.fillRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);

        this.tilemap.render(this.ctx, this.camera);

        for(let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].render(this.ctx, this.camera);
        }

    }

}