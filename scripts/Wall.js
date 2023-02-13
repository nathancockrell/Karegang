import PhysicsObject2D from "../WatawaeEngine/PhysicsObject2D.js";
import Animation from "./Animation.js";

export default class Wall extends PhysicsObject2D {
    constructor () {
        super(x,y);
        this.w = w;
        this.h = h;
        this.animation = new Animation("./assets/images/wall.png")
    }

    render(ctx){
        this.animation.render(ctx,100,100,100,100);
        
    }
}