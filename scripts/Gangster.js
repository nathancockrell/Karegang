import PhysicsObject2D from "../WatawaeEngine/PhysicsObject2D.js";
import Graphics from "../WatawaeEngine/Graphics.js";

export default class Gangster extends PhysicsObject2D {
    constructor(x, y, vx, vy) {
        super(x, y, vx, vy);
        this.w = 1;
        this.h = 1;
    }

    render(ctx, unitSize) {
        // ctx.fillStyle = "blue";
        // ctx.fillRect(this.x*unitSize, this.y*unitSize, this.w*unitSize, this.h*unitSize);




        if(this.ax<0) 
        ctx.drawImage(Graphics.get("gangsterLeft"), this.x*unitSize, this.y*unitSize, this.w*unitSize, this.h*unitSize);
        else 
        ctx.drawImage(Graphics.get("gangsterRight"), this.x*unitSize, this.y*unitSize, this.w*unitSize, this.h*unitSize);
    }
}