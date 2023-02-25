import Graphics from "../WatawaeEngine/Graphics.js";
import PhysicsObject2D from "../WatawaeEngine/PhysicsObject2D.js";

export default class Wall extends PhysicsObject2D {
    constructor () {
        super(x,y);
        this.w = w;
        this.h = h;
    }

    render(ctx){
        ctx.drawImage(Graphics.get("wall"), 100,100,100,100);
    }
}