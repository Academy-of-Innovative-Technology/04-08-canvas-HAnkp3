var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.arc(100, 100, 20, 0, Math.PI);
ctx.stroke();


ctx.rect(80, 30, 150, 100);
ctx.stroke();


ctx.font = "30px Arial";
ctx.strokeText("Hello Canvas!", 40, 250);
