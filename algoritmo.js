/*let numeroUnoIngresado= prompt ("ingrese un numero");
let numeroDosIngresado= prompt ("ingrese un segundo numero");
let numeroTresIngresado= prompt ("ingrese el tercer numero");*/
const numeroIngresado1= document.querySelector("#numero-ingreasado-1");
const numeroIngresado2= document.querySelector("#numero-ingreasado-2");
const numeroIngresado3= document.querySelector("#numero-ingreasado-3");

const parrafo = document.querySelector("#p-resultado")
function verificarConvinacion() {
    let numeroUnoIngresado=numeroIngresado1.value;
    let numeroDosIngresado=numeroIngresado2.value;
    let numeroTresIngresado=numeroIngresado3.value;  

    if ((numeroUnoIngresado==numeroDosIngresado)&&(numeroDosIngresado==numeroTresIngresado)&&(numeroTresIngresado==numeroUnoIngresado)) {
        parrafo.innerHTML = "ganaste el primer premio";
    } else if((numeroUnoIngresado==numeroDosIngresado)||(numeroDosIngresado==numeroTresIngresado)||(numeroUnoIngresado==numeroTresIngresado)){
        parrafo.innerHTML ="ganaste el segundo premio";
    } else {
        parrafo.innerHTML = "ganaste un helado";
    }
    
}

