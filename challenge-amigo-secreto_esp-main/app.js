// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Función para agregar amigos
function agregarAmigo(nombre) {
    let agregarAmigo = document.getElementById("amigo").value;

    if (agregarAmigo == "") {
        alert("Por favor, inserte un nombre");
    } if (amigos.includes(agregarAmigo)) {
        alert("Este amigo ya está en la lista");
        limpiarCampo();
    } else {
        amigos.push(agregarAmigo);
        limpiarCampo();
    }

    mostrarLista();
    console.log(amigos);
}

//funcion para mostrar la lista
function mostrarLista() {
    
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    // Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(amigos[i]));
        lista.appendChild(li);
    }
}

// Función para limpiar el campo
function limpiarCampo() {
    let valorCaja = document.getElementById("amigo");
    valorCaja.value = "";
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("No hay amigos disponibles para sortear");
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let resultadoSorteado = document.createElement("li");
    resultadoSorteado.textContent = 'El amigo sorteado es: '+ amigoSorteado;
    resultado.appendChild(resultadoSorteado);
}
