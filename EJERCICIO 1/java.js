// ==========================================
// 1. FUNCIONES MATEMÁTICAS (UNA DE CADA UNA)
// ==========================================

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
