// Laboratorio 18 - Ejercicio 9
// Autor: Mark Hancco

import multiplicar from './multiplicacionDivision.js';
import { dividir } from './multiplicacionDivision.js';
import { sumar, restar } from './sumaResta.js';

const a = 10;
const b = 5;

console.log("Suma:", sumar(a, b));
console.log("Resta:", restar(a, b));
console.log("Multiplicacion:", multiplicar(a, b));

try {
    console.log("Division:", dividir(a, b));
} catch (error) {
    console.error("Error en división:", error.message);
}

try {
    console.log("Division por cero:", dividir(a, 0));
} catch (error) {
    console.error("Error en división:", error.message);
}
