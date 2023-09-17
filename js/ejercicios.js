function impImpar() {
    let min = parseInt(document.getElementById("txtmin").value);
    let max = parseInt(document.getElementById("txtmax").value);
    let salida = document.getElementById("txtsalida");
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

function alrevez() {
        let x = prompt('Ingrese una palabra para reescribirla al revez').split('').reverse().join('');
        alert(x);
    }
    function Fibonacci() {
        const div = document.getElementById("delete");
        div.innerHTML = "<ul id='txtlista'><h2>Serie</h2></ul>";
        
        let cantidad=parseInt(document.getElementById("txtcantidad").value);
        var x = 0;
        var y = 1;
        var z = 1;
        var ul = document.getElementById('txtlista');
        for (let i = 0; i < cantidad; i++) {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(z));
            ul.appendChild(li);
            z = x + y;
            x = y;
            y = z;
        }

    }