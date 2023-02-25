import PhysicsObject2D from "../WatawaeEngine/PhysicsObject2D.js";
import Graphics from "../WatawaeEngine/Graphics.js";

export default class Gangster extends PhysicsObject2D {
    constructor(x, y, vx, vy) {
        super(x, y, vx, vy);
        this.w = 1;
        this.h = 1;
        this.graphic = "gangsterRight";
    }


    afterTick(elapsedTime) {
        if(this.ax<0) 
        this.graphic = "gangsterLeft";
        else
        this.graphic = "gangsterRight";
    }

    render(ctx, unitSize) {
        // ctx.fillStyle = "blue";
        // ctx.fillRect(this.x*unitSize, this.y*unitSize, this.w*unitSize, this.h*unitSize);
   
        
        ctx.drawImage(Graphics.get(this.graphic), this.x*unitSize, this.y*unitSize, this.w*unitSize, this.h*unitSize);
    }

}