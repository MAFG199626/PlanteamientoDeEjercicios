function Acelerar() {
    fondo0 = document.getElementById("fondocero");
    fondo1 = document.getElementById("fondouno");
    fondo2 = document.getElementById("fondodos");
    paramover = setInterval(moverA, 50);
    setInterval(repetirA, 2250);
}
    desplazar1 = 0;
function moverA() {
    desplazar1 -= 10;
    desplazar0 = desplazar1 + 450;
    
    desplazar2 = desplazar1 + 450;
    position0 = desplazar0 + "px";
    position1 = desplazar1 + "px";
    position2 = desplazar2 + "px";
    fondo0.style.left = position0;
    fondo1.style.left = position1;
    fondo2.style.left = position2;
}
function repetirA() {
    fondo0.style.left = "-450px";
    fondo1.style.left = "0px";
    fondo2.style.left = "450px";
    desplazar1 = 0;
}
//////////////////
function Retroceder() {
    fondo0 = document.getElementById("fondocero");
    fondo1 = document.getElementById("fondouno");
    fondo2 = document.getElementById("fondodos");
    paramover = setInterval(moverD, 50);
    setInterval(repetirD, 2250);
}
    desplazar1 = 0;
function moverD() {
    desplazar1 += 10;
    desplazar0 = desplazar1 -450;
    
    desplazar2 = desplazar1 - 450;
    position0 = desplazar0 + "px";
    position1 = desplazar1 + "px";
    position2 = desplazar2 + "px";
    fondo0.style.left = position0;
    fondo1.style.left = position1;
    fondo2.style.left = position2;
}
function repetirD() {
    fondo0.style.left = "-450px";
    fondo1.style.left = "0px";
    fondo2.style.left = "450px";
    desplazar1 = 0;
}