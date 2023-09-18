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
    function Palindromo() {
            var str = document.getElementById("str").value;
            let xd = str.replace(/\s/g, '').toLowerCase();
            const reverse = xd.split('').reverse().join('');
            console.log(reverse)
            if (xd == reverse) {
                alert(`La palabra ${str} es palidroma`)
            }
            else {
                alert(`La palabra ${str} no es palidroma`)
            }
        }

        function ChangePokemon1(){
            const select = document.getElementById("tipo1");
            const seleccion = select.value;
            let pokemon = document.getElementById("pokemon1")
            pokemon.setAttribute("src",`img/${seleccion}.png`)
        }
        function ChangePokemon2(){
            const select = document.getElementById("tipo2");
            const seleccion = select.value;
            let pokemon = document.getElementById("pokemon2")
            pokemon.setAttribute("src",`img/${seleccion}.png`)
        }
        function DañoPokemon() {
            var tipo1 = document.getElementById("tipo1").value;
            var tipo2 = document.getElementById("tipo2").value;
            var ataque = document.getElementById("ataque").value;
            var defensa = document.getElementById("defensa").value;

            var eficacia = 1;

            if (tipo1 === "fuego" && tipo2 === "hierba") {
                eficacia = 2;
            } else if (tipo1 === "agua" && tipo2 === "fuego") {
                eficacia = 2;
            } else if (tipo1 === "electricidad" && tipo2 === "agua") {
                eficacia = 2;
            } else if ((tipo1 === "fuego" && tipo2 === "electrico") || (tipo2 === "fuego" && tipo1 === "electrico")) {
                eficacia = 1;
            } else if ((tipo1 === "fuego" && tipo2 === "hierba") || (tipo2 === "fuego" && tipo1 === "hierba")) {
                eficacia = 1;
            } else {
                eficacia = 0.5;
            }6

            var daño = Math.floor(50 * (ataque / defensa) * eficacia);
            document.getElementById("result").innerHTML = `El Daño es de ${daño}`;

                        //////////////////////////////

            const select = document.getElementById("tipo2");
            const seleccion = select.value;
            const img = document.getElementById("pokemonMove");
            img.innerHTML = `<img src="./img/${seleccion}.png" alt="no hay xd" id="pokemon2" class="pokemon2move">`;
        }