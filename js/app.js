let listaAmigos = [];
let amigosIncluidos = document.getElementById('lista-amigos');
let paresNomes = document.getElementById('lista-sorteio');

function adicionar() {
    listaAmigos.push(document.getElementById('nome-amigo').value);
    document.getElementById('nome-amigo').value = '';
    amigosIncluidos.textContent = listaAmigos;
}

function reiniciar() {
    listaAmigos = [];
    amigosIncluidos.textContent = listaAmigos;
    paresNomes.innerHTML = '';
}

function sortear() {
    paresNomes.innerHTML = '';
    let listaAleatoria = [];
    let i = 0;
    while (listaAleatoria.length < listaAmigos.length) {
        let numAleatorio = Math.floor((Math.random() * listaAmigos.length));
        if (!listaAleatoria.includes(numAleatorio) && numAleatorio!=listaAleatoria.length) {
            listaAleatoria.push(numAleatorio);
            i++;
        }
    }
    exibeNomes(listaAleatoria);
    amigosIncluidos.textContent = '';
    listaAmigos = [];
}

function exibeNomes(listaAleatoria) {
    let i = 0;
    while (i < listaAmigos.length) {
        paresNomes.innerHTML += listaAmigos[i] + ' > ';
        paresNomes.innerHTML += listaAmigos[listaAleatoria[i]] + '<br>';
        i++;
    }
}