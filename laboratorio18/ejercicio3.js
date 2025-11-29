// Laboratorio 18 - Ejercicio 3
// Autor: Mark Hancco

function cargarUsuario() {
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(response => response.json())
        .then(data => {
            console.log("Name:", data.name);
            console.log("Username:", data.username);
            console.log("Email:", data.email);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

cargarUsuario();
