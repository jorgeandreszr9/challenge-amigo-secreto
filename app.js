// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres de amigos
let amigos = [];

//Crear una función que permita ingresar un nombre y agregarlo a la lista de amigos
function agregarAmigo() {
    let amigoIngresado = document.getElementById('amigo').value.trim();

    if (amigoIngresado == '') {
        alert("Por favor, inserte un nombre.");
    } else if (!validarNombre(amigoIngresado)) {
        alert("Por favor, ingrese sólo letras y espacios.");
    } else if ( amigos.map(a => a.toLowerCase()).includes(amigoIngresado.toLowerCase()) ) {
        alert("El nombre ingresado ya existe. Por favor, no repita exactamente el mismo nombre.");
    } else {
        amigos.push(amigoIngresado);
        actualizarListaAmigos();
        limpiarCaja();
    }
}

//Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i=0; i < amigos.length; i++) {
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigos[i];
        lista.appendChild(nuevoAmigo);
    }    
}

//Función para sortear amigo
function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * (amigos.length));
        let amigoResultado = document.getElementById('resultado');
        return amigoResultado.innerHTML = amigos[indiceAleatorio];
    } else {
        return alert('Por favor, inserte los nombres primero.');
    }
}

//Crear uns función con expresiones regulares, para validar que sólo ingresen letras, acentos o espacios
function validarNombre(nombre) {
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(nombre);
}

//Crear una función para limpiar la caja
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}