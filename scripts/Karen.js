import Animation from "../WatawaeEngine/Animation.js";
import Graphics from "../WatawaeEngine/Graphics.js";
import PhysicsObject2D from "../WatawaeEngine/PhysicsObject2D.js";

export default class Karen extends PhysicsObject2D{
    constructor(x, y, vx, vy) {
        super(x,y, 1, 1, vx, vy);
        this.type = "karen";

        this.animation = new Animation([
            {name:"Walk", time:0.3},
            {name:"", time:0.3},
        ]);
        this.graphic = "karen1Right";
    }

    afterTick(elapsedTime) {
        if(this.vx<0) 
        this.graphic = "karen1Left";
        else
        this.graphic = "karen1Right";

        this.animation.tick(elapsedTime);
    }

    render(ctx, camera) {
        if(this.inCollision)
        ctx.fillStyle = "green";
        else {
            ctx.fillStyle = "red";
        }
        // ctx.fillRecddt(this.x*unitSize,this.y*unitSize,this.w*unitSize, this.h*unitSize)
        // ctx.beginPath();
        // const pos = this.getCenter();
        const drawPos = camera.getDrawPos(this.x, this.y);
        // ctx.arc(drawPos.x, drawPos.y, this.w*camera.unitSize/2, 0, 2*Math.PI);
        // ctx.fill();
        console.log(this.graphic+this.animation.get());
        ctx.drawImage(Graphics.get(this.graphic+this.animation.get()), drawPos.x, drawPos.y, this.w*camera.unitSize, this.h*camera.unitSize)
    }
}