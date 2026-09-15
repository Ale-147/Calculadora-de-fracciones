
// SUMA
function sumarproceso(numerador1, denominador1, numerador2, denominador2) {
    let suma1 = (numerador1 * denominador2) + (denominador1 * numerador2);
    let suma2 = denominador1 * denominador2;
    return { num: suma1, den: suma2 };
}

// RESTA 

function restarproceso(numerador1, denominador1, numerador2, denominador2) {
    let rest1 = (numerador1 * denominador2) - (denominador1 * numerador2);
    let rest2 = denominador1 * denominador2;
    return { num: rest1, den: rest2 };
}

// MULTIPLICACION

function multiplicarproceso(numerador1, denominador1, numerador2, denominador2) {
    let multi1 = numerador1 * numerador2;
    let multi2 = denominador1 * denominador2; // Corregido: antes tenías denominador1 dos veces
    return { num: multi1, den: multi2 };
}


// DIVISION

function dividirproceso(numerador1, denominador1, numerador2, denominador2) {
    let div1 = numerador1 * denominador2;
    let div2 = denominador1 * numerador2;
    return { num: div1, den: div2 }; // Corregido: antes decía "div" en lugar de "div1"
}

// ==========================================
// 2. FUNCIÓN ÚNICA DE CONTROL PARA LA PANTALLA
// ==========================================

function ejecutarOperacion() {
    let operacion = document.getElementById("operacion").value;
    if (operacion === "null") return;

    let n1 = Number(document.getElementById("num1").value);
    let d1 = Number(document.getElementById("den1").value);
    let n2 = Number(document.getElementById("num2").value);
    let d2 = Number(document.getElementById("den2").value);

    // Validar denominadores en cero
    if (d1 === 0 || d2 === 0) {
        alert("Los denominadores no pueden ser cero.");
        return;
    }

    let resultado;

    // Evaluamos qué operación seleccionó el usuario
    if (operacion === "suma") {
        resultado = sumarproceso(n1, d1, n2, d2);
    } 
    else if (operacion === "resta") {
        resultado = restarproceso(n1, d1, n2, d2);
    }
    else if (operacion === "multiplicar") {
        // Corregido: Enviamos las variables en el orden correcto (n1, d1, n2, d2)
        resultado = multiplicarproceso(n1, d1, n2, d2);
    }
    else if (operacion === "dividir") {
        // Validar división por cero si el segundo numerador es cero
        if (n2 === 0) {
            alert("No se puede dividir si el segundo numerador es cero.");
            return;
        }
        // Corregido: Nombre de función corregido y orden de variables arreglado
        resultado = dividirproceso(n1, d1, n2, d2);
    }

    // Mostrar los resultados finales en la interfaz HTML
    if (resultado !== undefined) {
        document.getElementById("resNum").value = resultado.num;
        document.getElementById("resDen").value = resultado.den;
    }
}









let respuestaCorrecta = 0;

// Variables para el cronómetro
let segundos = 0;
let minutos = 0;
let intervaloTiempo;

window.addEventListener("DOMContentLoaded", () => {
    GenerarEcuacion();
    IniciarTiempo(); // Activamos el cronómetro al cargar la página
});

// Función del Cronómetro
const IniciarTiempo = () => {
    // Ejecuta el código interno cada 1 segundo (1000 milisegundos)
    intervaloTiempo = setInterval(() => {
        segundos++;

        if (segundos === 60) {
            minutos++;
            segundos = 0;
        }

        // Formateamos los segundos para que muestre "05" en lugar de "5"
        let segundosTexto = segundos < 10 ? "0" + segundos : segundos;

        // Buscamos tu div original por su ID "time" y actualizamos el texto
        document.getElementById("time").innerHTML = `TIME:${minutos}:${segundosTexto}`;
    }, 1000);
}

// Función para generar números aleatorios (del 1 al 10)
const nR = () => Math.floor(Math.random() * 10) + 1;

const GenerarEcuacion = () => {
    let tipoEcuacion = Math.floor(Math.random() * 3);
    let ecuacionTexto = "";
    let a = nR(), b = nR(), c = nR(), d = nR();

    switch(tipoEcuacion) {
        case 0:
            ecuacionTexto = `${a}X + ${b} = ${c}`;
            respuestaCorrecta = (c - b) / a;
            break;
        case 1:
            if (b === d) b++; 
            ecuacionTexto = `${a} + ${b}X = ${c} + ${d}X`;
            respuestaCorrecta = (c - a) / (b - d);
            break;
        case 2:
            if (b === 1) b++;
            ecuacionTexto = `${a} - ${b}X + ${c} = ${d} - X`;
            respuestaCorrecta = (a + c - d) / (b - 1);
            break;
    }

    respuestaCorrecta = Math.round(respuestaCorrecta * 10) / 10;
    document.querySelector(".content3").innerHTML = ecuacionTexto;
    inyectarRespuestas();
}

const inyectarRespuestas = () => {
    let falsa1 = respuestaCorrecta + (Math.floor(Math.random() * 3) + 1);
    let falsa2 = respuestaCorrecta - (Math.floor(Math.random() * 3) + 1);

    falsa1 = Math.round(falsa1 * 10) / 10;
    falsa2 = Math.round(falsa2 * 10) / 10;

    let opciones = [respuestaCorrecta, falsa1, falsa2];
    opciones.sort(() => Math.random() - 0.5);

    const cuad1 = document.querySelector(".circle");
    const cuad2 = document.querySelector(".circle1");
    const cuad3 = document.querySelector(".circle2");

    cuad1.innerHTML = opciones[0];
    cuad2.innerHTML = opciones[1];
    cuad3.innerHTML = opciones[2];

    cuad1.onclick = () => verificarRespuesta(opciones[0]);
    cuad2.onclick = () => verificarRespuesta(opciones[1]);
    cuad3.onclick = () => verificarRespuesta(opciones[2]);
}

const verificarRespuesta = (valorSeleccionado) => {
    if (valorSeleccionado === respuestaCorrecta) {
        alert("¡Correcto!");
        GenerarEcuacion();
    } else {
        alert(`Incorrecto. La respuesta era ${respuestaCorrecta}`);
    }
}




// ultimo ejercicio

function cambiarImagen(){
    let seleccion = document.getElementById("miLista").value

    let cajaImagen = document.getElementById("imagenMost")


    if(seleccion === "Tr"){
        cajaImagen.src = "img/cuadrado.png";
    }

    else if (seleccion === "Rec") {
        cajaImagen.src = "img/rectangulo.png";

        
    } else if (seleccion === "Cu") {
        cajaImagen.src = "img/triangulo.png";
        
    }


    else if (seleccion === "Pent") {
        cajaImagen.src = "img/pentagono.png"
    }

    else if (seleccion === "Hexa") {
        cajaImagen.src = "img/hexagono.png"
    }

    else if (seleccion === "Octa") {
        cajaImagen.src = "img/octagono.png"
    }



}

function cambiarFigura(){

    let numero = parseFloat(document.querySelector('input[placeholder="Ingrese un numero"]').value);

    let figuraseleccionada = document.querySelector(".figure").value;

    if(isNaN(numero) || numero<=0){
        alert("Ingrese un numero valido");
        return;
    }

    let area = 0;
    let perimetro = 0;

    if (figuraseleccionada === "Cu") {

        area= numero*numero;
        perimetro = numero*4
        
    }

    else if (figuraseleccionada === "Rec") {

        let altura = 5;

        area= numero* altura;
        perimetro = (numero*2) + (altura*2);
        
    }

    else if (figuraseleccionada === "Tr") {
        let alura1 = 7;

        area = (numero*alura1)/2;
        perimetro= numero*3;

        
    }

    else if (figuraseleccionada === "Pent") {
        
        area= (5*(numero * numero))/2.91;
        perimetro= numero*5;
    }

    else if (figuraseleccionada === "Hexa") {
        area= (numero*numero) * 2.598;
        perimetro=numero*6;
        
    }


    else if (figuraseleccionada === "Octa") {
        area= (numero*numero) * 4.8284;
        perimetro= numero*8
    }

    document.querySelector('input[placeholder="area"]').value=area;
    document.querySelector('input[placeholder="perimetro"]').value=perimetro;

}