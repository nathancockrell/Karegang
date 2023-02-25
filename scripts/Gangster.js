import PhysicsObject2D from "../WatawaeEngine/PhysicsObject2D.js";
import Graphics from "../WatawaeEngine/Graphics.js";
import Animation from "../WatawaeEngine/Animation.js";


export default class Gangster extends PhysicsObject2D {
    constructor(x, y, vx, vy) {
        super(x, y, vx, vy);
        this.w = 1;
        this.h = 1;
        this.graphic = "gangsterRight";
        this.animation = new Animation([
            {name:"gangsterRight", time:2}
            ,{name:"gangsterLeft", time:2},
            {name:"gangsterRight", time:2},
            {name:"gangsterLeft", time:2}]);
    }


    afterTick(elapsedTime) {
        if(this.ax<0) 
        this.graphic = "gangsterLeft";
        else
        this.graphic = "gangsterRight";

        this.animation.tick(elapsedTime);
    }

    render(ctx, unitSize) {
        // ctx.fillStyle = "blue";
        // ctx.fillRect(this.x*unitSize, this.y*unitSize, this.w*unitSize, this.h*unitSize);
   
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(Graphics.get(this.animation.get()), this.x*unitSize, this.y*unitSize, this.w*unitSize, this.h*unitSize);
    }

}