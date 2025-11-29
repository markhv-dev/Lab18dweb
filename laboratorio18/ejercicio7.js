// Laboratorio 18 - Ejercicio 7
// Autor: Mark Hancco

function cargarUsuario() {
    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(response => response.json())
        .then(data => {
            document.getElementById("resultado").innerHTML =
                "Nombre: " + data.name + "<br>" +
                "Email: " + data.email + "<br>" +
                "Ciudad: " + data.address.city;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
