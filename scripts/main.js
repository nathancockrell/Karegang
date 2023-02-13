import KareGang from "./KareGang.js";



window.onload = function(){
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    const game = new KareGang(ctx);
    game.setUpEventListeners();
    game.start();
}
