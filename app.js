
const amigos = [];

let vaciarCampo         = (id) => {
    let campo           = document.getElementById(id);
    campo ? campo.value = '' : console.warn(`Campo con id: "${id}" No encontrado.`)
};

let vaciarLista = (id) => {
    let listado                 = document.getElementById(id);
    listado ? listado.innerHTML = '' : console.warn(`Campo con id: "${id}" No encontrado.`);
};

let agregarAmigo    = () => {
    let nombre      = document.getElementById('amigo').value.trim();
    nombre.trim() === '' ? alert('Por favor, inserte un nombre.') : amigos.push(nombre);

    vaciarLista('listaAmigos');

    let listado     = document.getElementById('listaAmigos');

    for (let i = 0; i < amigos.length; i++) {
        let li         = document.createElement('li');
        li.textContent = amigos[i];
        listado.appendChild(li);
    };

    vaciarCampo('amigo');
    vaciarLista('resultado');
    return;
};

let sortearAmigo        = () => {
    if (amigos.length === 0) {
        alert('¡Ya no quedan amigos por sortear!');

        return;
    }

    let numMax          = amigos.length;
    let numeroAleatorio = Math.floor(Math.random() * numMax);
    let resultado       = amigos.splice(numeroAleatorio, 1)[0];
    let nombreSorteo    = document.getElementById('resultado');

    vaciarLista('resultado');

    let creacionNombre         = document.createElement('li');
    creacionNombre.textContent = `Tu amigo secreto es: ¡${resultado}!`;
    nombreSorteo.appendChild(creacionNombre);

    let listado = document.getElementById('listaAmigos');

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listado.appendChild(li);
    };

    vaciarLista('listaAmigos');

};
