var character = document.getElementById("character");
var block = document.getElementById("block");
var start = document.getElementById("start");
var buton = document.getElementById("button");
var heaD = document.getElementById("head");
var gAme = document.getElementById("game");
var a = 0;
document.getElementById("disp").innerHTML = a;
start.classList.add("off");
buton.classList.remove("texts");
document.getElementById("page").addEventListener("keydown",starT);
function clicks(){
    document.getElementById("page").removeEventListener("keydown",starT);
    document.getElementById("page").addEventListener("keydown",jump);
}
function noClicks(){
    setTimeout( document.getElementById("page").removeEventListener("keydown",jump),
    5000,
    document.getElementById("page").addEventListener("keydown",starT)); 
}
function starT(){
    if(start.classList != "on"){
        a = 0;
    block.classList.add("blockin");
    start.classList.remove("off");
    start.classList.add("on");
    buton.classList.add("texts");
    gAme.style.pointerEvents = 'auto';
    document.getElementById("disp").style.top = "-5px";
    document.getElementById("disp").style.fontSize = "50px";
    document.getElementById("disp").classList.remove("finish");
    clicks();
    }else {
        stoP();
    }
}
function stoP(){
    noClicks();
    block.classList.remove("blockin");
    start.classList.remove("on");
    buton.classList.remove("texts")
    start.classList.add("off");
    gAme.style.pointerEvents = 'none';
    document.getElementById("disp").classList.add("finish");
    document.getElementById("disp").style.top = "70px";
    document.getElementById("disp").style.fontSize = "100px";
    document.getElementById("disp").innerHTML = a;
    a > 9 ? document.getElementById("disp").style.left = "200px":null;
}
function jump(){
    if(character.classList != "animation"){
         character.classList.add("animation");
         gAme.classList.add("screens");
         document.getElementById("lhand").classList.add("lhands");
         document.getElementById("rhand").classList.add("lhands");
         heaD.classList.add("headmov");
    }
    
    setTimeout(function(){
        character.classList.remove("animation");
        gAme.classList.remove("screens");
        heaD.classList.remove("headmov");
        document.getElementById("lhand").classList.remove("lhands");
        document.getElementById("rhand").classList.remove("lhands");
    },500);
}
var check = setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<30 && blockLeft>20 && characterTop>=130){
        stoP();
    }
}, 10);

var count = setInterval(() => {
    var blockLefT = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLefT<20 && blockLefT>10){
        var b = a;
        a = a + 1;
        if (b == a+2){
            document.getElementById("disp").innerHTML = a +"bonus point";
        }else{
        document.getElementById("disp").innerHTML = a;
        }
    }
    
}, 30);