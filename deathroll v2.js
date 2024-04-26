
const botonDeRoll = document.getElementById("boton-de-roll")

const botonDeApuesta = document.getElementById("boton-de-apuesta")

const numeroAhora = document.getElementById("numeroAhora")

const unoDeathroll = 1

botonDeRoll.style.visibility = 'hidden'

botonDeApuesta.addEventListener("click", ()=> {

    let numeroApuesta = parseInt(prompt("Ingresá tu apuesta multiplicada x 10"));

    numeroAhora.textContent = "Tu apuesta es: " + numeroApuesta;

    botonDeRoll.style.visibility = 'visible';
    botonDeApuesta.style.visibility = 'hidden';

    botonDeRoll.addEventListener("click", ()=> {

        const numeroRoleado = Math.floor(Math.random() * (numeroApuesta - unoDeathroll) + unoDeathroll);
               
        numeroAhora.textContent = numeroRoleado


        if(numeroRoleado > 1){

            numeroApuesta = numeroRoleado
        
        
        }
        if(numeroRoleado === 1) {

            botonDeRoll.style.visibility = 'hidden'
            
            numeroAhora.textContent = "PERDISTE"
        
        }

    
    })
    
})

