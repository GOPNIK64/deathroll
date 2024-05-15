const numeroIngresado = [];

const displayTexto = document.querySelector(".displayNumero")

const displayTextoApuesta = document.querySelector(".displayApuesta")

displayTextoApuesta.style.visibility = 'hidden';

// CONSTANTES DEL JUEGO
const unoDeathroll = 1

const botonDeRoll = document.querySelector("#roll")

let numeroApuesta = ""

// display.document.

document.addEventListener('click', (e) => {

    if(e.target.id === "roll"){

        const numeroRoleado = Math.floor(Math.random() * (numeroApuesta - unoDeathroll) + unoDeathroll);
                   
            displayTexto.textContent = numeroRoleado
    
    
            if(numeroRoleado > 1){
    
                numeroApuesta = numeroRoleado
            
            
            }
            if(numeroRoleado === 1) {

                botonDeRoll.style.visibility = 'hidden';

                displayTextoApuesta.style.visibility = 'visible';
                
                displayTextoApuesta.textContent = "Dead"
            
            }

            
    }

    // const display = +(numeroIngresado.join(''));

    if(e.target.id === "0"){
        // console.log(0)
        numeroIngresado.push("0")

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

    };
    if(e.target.id === "1"){
        // console.log(1)
        numeroIngresado.push("1");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display
        
        numeroApuesta = display
    
    };
    if(e.target.id === "2"){
        // console.log("2")
        numeroIngresado.push("2");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

    };
    if(e.target.id === "3"){
        // console.log("3")
        numeroIngresado.push("3");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

    };
    if(e.target.id === "4"){
        // console.log("4")
        numeroIngresado.push("4");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

    };
    if(e.target.id === "5"){
        // console.log("5")
        numeroIngresado.push("5");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

    };
    if(e.target.id === "6"){
        // console.log("6")
        numeroIngresado.push("6");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

    };
    if(e.target.id === "7"){
        // console.log("7")
        numeroIngresado.push("7");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

    };
    if(e.target.id === "8"){
        // console.log("8")
        numeroIngresado.push("8");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

    };
    if(e.target.id === "9"){
        // console.log("9")
        numeroIngresado.push("9");

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

  
    };

    if(e.target.id === "X"){
        numeroIngresado.length = 0

        console.log(numeroIngresado)

        const display = +(numeroIngresado.join(''));

        console.log(display)

        displayTexto.textContent = display

        numeroApuesta = display

        botonDeRoll.style.visibility = 'visible';

        displayTextoApuesta.style.visibility = 'hidden';




    };
});

