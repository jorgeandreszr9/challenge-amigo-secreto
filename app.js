// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres de amigos
let amigos = [];

//Crear una función que permita ingresar un nombre y agregarlo a la lista de amigos
function agregarAmigo() {
    let amigoIngresado = document.getElementById('amigo').value;
    
    if (amigoIngresado == '') {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigoIngresado);
        limpiarCaja();
    }
}

//Crear una función para limpiar la caja
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}