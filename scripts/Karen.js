import PhysicsObject2D from "../WatawaeEngine/PhysicsObject2D.js";

export default class Karen extends PhysicsObject2D{
    constructor(x, y, vx, vy) {
        super(x,y, vx, vy);
        this.w=1;
        this.h=1;
    }

    render(ctx, unitSize) {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x*unitSize,this.y*unitSize,this.w*unitSize, this.h*unitSize)
    }
}