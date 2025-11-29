// Laboratorio 18 - Ejercicio 5
// Autor: Mark Hancco

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(usuarios => {
        usuarios.forEach(usuario => {
            console.log(usuario.name);
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });
