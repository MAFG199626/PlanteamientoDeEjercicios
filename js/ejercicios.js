function impImpar() {
    let min = parseInt(document.getElementById("txtmin").value);
    let max = parseInt(document.getElementById("txtmax").value);
    let salida = document.getElementById("txtsalida")
    let impares = "";
if(min<max){
    for (let i = min; i < max; i++) {
        if (i % 2 != 0) {
            console.log(`${i}`)
            let r = `Numero impar: ${i}`;
            impares += r + "<br>";
        }
    }
}
else{
    for (let i = min; i > max; i--) {
        if (i % 2 != 0) {
            console.log(`${i}`)
            let r = `Numero impar: ${i}`;
            impares += r + "<br>";
        }
    }
}
    salida.innerHTML = impares;
}