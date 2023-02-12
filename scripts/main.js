
const canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        ctx.canvas.width = window.innerHeight-20;
        ctx.canvas.height = window.innerHeight-20;
        

window.onload = function(){
        strokeRect(0,0,canvas.width,canvas,height);
}