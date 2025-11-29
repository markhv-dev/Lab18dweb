// Laboratorio 18 - Ejercicio 11
// Autor: Mark Hancco

const regex = /https:\/\/[^\s]+/g;

const texto = "Visita https://www.google.com o http://ejemplo.com pero usa https://github.com";
const urls = texto.match(regex);

console.log("URLs seguras:", urls);
