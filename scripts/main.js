import KareGang from "./KareGang.js";

window.onload = function(){
    const canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        ctx.canvas.width = window.innerHeight-20;
        ctx.canvas.height = window.innerHeight-20;
        ctx.strokeRect(0,0,ctx.canvas.width,ctx.canvas.height)


        const game = new KareGang();
        game.start();
}