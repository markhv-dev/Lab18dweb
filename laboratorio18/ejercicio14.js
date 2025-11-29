// Laboratorio 18 - Ejercicio 14
// Autor: Mark Hancco

const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

console.log("25/12/2024:", regex.test("25/12/2024"));
console.log("32/12/2024:", regex.test("32/12/2024"));
console.log("15/13/2024:", regex.test("15/13/2024"));
console.log("5/5/2024:", regex.test("5/5/2024"));
