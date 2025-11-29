// Laboratorio 18 - Ejercicio 10
// Autor: Mark Hancco

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

console.log("Password123:", regex.test("Password123"));
console.log("pass123:", regex.test("pass123"));
console.log("PASSWORD123:", regex.test("PASSWORD123"));
console.log("Pass1:", regex.test("Pass1"));
