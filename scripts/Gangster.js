import PhysicsObject2D from "../WatawaeEngine/PhysicsObject2D.js";
import Graphics from "../WatawaeEngine/Graphics.js";
import Animation from "../WatawaeEngine/Animation.js";


export default class Gangster extends PhysicsObject2D {
    constructor(x, y, vx, vy) {
        super(x, y, 1, 1, vx, vy);
        this.graphic = "gangsterRight";
        this.animation = new Animation([
            {name:"gangsterRight", time:2}
            ,{name:"gangsterLeft", time:2},
            {name:"gangsterRight", time:2},
            {name:"gangsterLeft", time:2}]);
        this.type="gangster";
    }


    afterTick(elapsedTime) {
        if(this.ax<0) 
        this.graphic = "gangsterLeft";
        else
        this.graphic = "gangsterRight";

        this.animation.tick(elapsedTime);
    }

    render(ctx, camera) {
        // ctx.fillStyle = "blue";
        // ctx.fillRect(this.x*unitSize, this.y*unitSize, this.w*unitSize, this.h*unitSize);
   
        // if(!this.inCollision) {
        ctx.imageSmoothingEnabled = false;
        const drawPos = camera.getDrawPos(this.x, this.y);
        ctx.drawImage(Graphics.get(this.animation.get()), drawPos.x, drawPos.y, this.w*camera.unitSize, this.h*camera.unitSize);
        // }ddd
        
    }

}