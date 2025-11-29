// Laboratorio 18 - Ejercicio 13
// Autor: Mark Hancco

const regex = /[.!?]+/;

const texto = "Hola. Cómo estás? Bien!";
const oraciones = texto.split(regex);

console.log("Oraciones:", oraciones);
