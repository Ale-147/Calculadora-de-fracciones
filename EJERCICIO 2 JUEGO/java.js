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
