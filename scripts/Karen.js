import PhysicsObject2D from "../WatawaeEngine/PhysicsObject2D.js";

export default class Karen extends PhysicsObject2D{
    constructor(x, y, vx, vy) {
        super(x,y, 1, 1, vx, vy);
        this.type = "karen";
    }

    render(ctx, camera) {
        if(this.inCollision)
        ctx.fillStyle = "green";
        else {
            ctx.fillStyle = "red";
        }
        // ctx.fillRecddt(this.x*unitSize,this.y*unitSize,this.w*unitSize, this.h*unitSize)
        ctx.beginPath();
        const pos = this.getCenter();
        const drawPos = camera.getDrawPos(pos.x, pos.y);
        ctx.arc(drawPos.x, drawPos.y, this.w*camera.unitSize/2, 0, 2*Math.PI);
        ctx.fill();
    }
}