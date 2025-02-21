
const amigos    = [];

let vaciarCampo = () => {
    document.getElementById('amigo').value = '';
};

let agregarAmigo    = () => {
    let nombre      = document.getElementById('amigo').value.trim();
    nombre.trim() === '' ? alert('Por favor, inserte un nombre.') : amigos.push(nombre);
    
    console.log(amigos);                                         //eliminar luego es para debugging

    let listado       = document.getElementById('listaAmigos');
    listado.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        let li         = document.createElement('li');
        li.textContent = amigos[i];
        listado.appendChild(li);
    }

    vaciarCampo();

    return;
};


