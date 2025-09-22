// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//1. Crear un array para almacenar los nombres
// Array para guardar los nombres
let amigos = [];


//2. Implementar función para agregar amigos
function agregarAmigo() {
    // Capturar valor del input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Limpiar el campo
    input.value = "";

    // Actualizar la lista en pantalla
    actualizarLista();
}

// 3. Implementar función para actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista
    lista.innerHTML = "";

    // Recorrer el array y crear <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// 4. Implementar función para sortear el amigo secreto
function sortearAmigo() {
    // Validar que haya amigos
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Índice aleatorio
    let indice = Math.floor(Math.random() * amigos.length);

    // Nombre sorteado
    let resultado = amigos[indice];

    // Mostrar en pantalla
    document.getElementById("resultado").innerHTML = 
        "🎉 El amigo secreto es: <strong>" + resultado + "</strong>";
}
