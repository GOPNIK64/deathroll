const numeroIngresado = [];

const displayTexto = document.querySelector(".displayNumero")

const displayTextoApuesta = document.querySelector(".displayApuesta")

displayTextoApuesta.style.visibility = 'hidden';

const botoneraEsconder = document.querySelectorAll("#cero, #uno, #dos, #tres, #cuatro, #cinco, #seis, #siete, #ocho, #nueve")

const botondeX = document.querySelector("#x")

botondeX.style.visibility = "hidden"



// CONSTANTES DEL JUEGO

const unoDeathroll = 1

const botonDeRoll = document.querySelector("#roll")

let numeroApuesta = ""

//

botonDeRoll.style.visibility = "hidden"

// BOTONERA MUY COMPLEJA
document.addEventListener("click", (e) => {

    if(e.target.id === "roll"){

        botondeX.style.visibility = "hidden"

        

        const numeroRoleado = Math.floor(Math.random() * (numeroApuesta - unoDeathroll) + unoDeathroll);
                   
            displayTexto.textContent = numeroRoleado
    
    
            if(numeroRoleado > 1){
    
                numeroApuesta = numeroRoleado

                
            
            
            }
            if(numeroRoleado === 1) {

                botonDeRoll.style.visibility = "hidden";

                displayTextoApuesta.style.visibility = "visible";
                
                displayTextoApuesta.textContent = "Dead"

                botoneraEsconder.forEach(e => e.style.visibility = "hidden")

                botondeX.style.visibility = "visible"
                
                botondeX.textContent = "Reset?"
            
            }
            if(numeroRoleado !== 0) {
                botoneraEsconder.forEach(e => e.style.visibility = "hidden")
                
            }
            if(numeroRoleado === 0) {
                // botondeX.style.visibility = "visible"

                displayTexto.textContent ="/"

            }

            
    }

    // const display = +(numeroIngresado.join(''));

    if(e.target.id === "cero"){
        // console.log(0)
        numeroIngresado.push("0")

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

        botondeX.style.visibility = "visible"

        if(display === 0) {
            
            displayTexto.textContent ="/"

            botondeX.style.visibility = "hidden"

        };
        

    };
    if(e.target.id === "uno"){
        // console.log(1)
        numeroIngresado.push("1");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display
        
        numeroApuesta = display

        botondeX.style.visibility = "visible"

        botonDeRoll.style.visibility = "visible"
    
    };
    if(e.target.id === "dos"){
        // console.log("2")
        numeroIngresado.push("2");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

        botondeX.style.visibility = "visible"

        botonDeRoll.style.visibility = "visible"

    };
    if(e.target.id === "tres"){
        // console.log("3")
        numeroIngresado.push("3");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

        botondeX.style.visibility = "visible"

        botonDeRoll.style.visibility = "visible"

    };
    if(e.target.id === "cuatro"){
        // console.log("4")
        numeroIngresado.push("4");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

        botondeX.style.visibility = "visible"

        botonDeRoll.style.visibility = "visible"

    };
    if(e.target.id === "cinco"){
        // console.log("5")
        numeroIngresado.push("5");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

        botondeX.style.visibility = "visible"

        botonDeRoll.style.visibility = "visible"

    };
    if(e.target.id === "seis"){
        // console.log("6")
        numeroIngresado.push("6");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

        botondeX.style.visibility = "visible"

        botonDeRoll.style.visibility = "visible"

    };
    if(e.target.id === "siete"){
        // console.log("7")
        numeroIngresado.push("7");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

        botondeX.style.visibility = "visible"

        botonDeRoll.style.visibility = "visible"

    };
    if(e.target.id === "ocho"){
        // console.log("8")
        numeroIngresado.push("8");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

        botondeX.style.visibility = "visible"

        botonDeRoll.style.visibility = "visible"

    };
    if(e.target.id === "nueve"){
        // console.log("9")
        numeroIngresado.push("9");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

        botondeX.style.visibility = "visible"

        botonDeRoll.style.visibility = "visible"

  
    };

    if(e.target.id === "x"){

        botondeX.textContent = "X"

        numeroIngresado.length = 0

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

        botonDeRoll.style.visibility = 'visible';

        displayTextoApuesta.style.visibility = 'hidden';

        botoneraEsconder.forEach(e => e.style.visibility = "visible")

        botondeX.style.visibility = "hidden"

        botonDeRoll.style.visibility = "hidden"
        
        if(display === 0) {
            
            displayTexto.textContent ="/"


        };


    };
});

// FALTA:
    //Resolver cajita de numeros moviendo la grid
    // que se derrame la apuesta
    //cuando apreto roll sin un valor la caja dice 0
    // que roll arranque hidden




