// Laboratorio 18 - Ejercicio 8
// Autor: Mark Hancco

async function cargarUsuario() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const data = await response.json();

        document.getElementById("resultado").innerHTML =
            "Nombre: " + data.name + "<br>" +
            "Email: " + data.email + "<br>" +
            "Ciudad: " + data.address.city;
    } catch (error) {
        console.error("Error:", error);
    }
}
