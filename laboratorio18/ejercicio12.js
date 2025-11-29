// Laboratorio 18 - Ejercicio 12
// Autor: Mark Hancco

const regex = /<[^>]*>/g;

const textoHTML = "<h1>Hola</h1>";
const textoLimpio = textoHTML.replace(regex, '');

console.log("Texto sin HTML:", textoLimpio);
