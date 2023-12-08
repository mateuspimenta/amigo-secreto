let listaAmigos = [];
let amigosIncluidos = document.getElementById('lista-amigos');
let paresNomes = document.getElementById('lista-sorteio');
let i = 1;

function adicionar() {
    listaAmigos.push(document.getElementById('nome-amigo').value);
    document.getElementById('nome-amigo').value = '';
    amigosIncluidos.textContent = listaAmigos;
}

function reiniciar () {
    listaAmigos = [];
    amigosIncluidos.textContent = listaAmigos;
    paresNomes.innerHTML = '';
}

function sortear() {
    paresNomes.innerHTML = '';
    while (listaAmigos.length > 0) {
        let numSorteado = parseInt(Math.random() * listaAmigos.length);
        let nomeSorteado = listaAmigos[numSorteado];
        exibeNomes(nomeSorteado);
        listaAmigos.splice(numSorteado,1);
        amigosIncluidos.textContent = '';
    } 
}

function exibeNomes(nomeSorteado) {
    paresNomes.innerHTML += nomeSorteado;
    if (i % 2 == 0) {
        paresNomes.innerHTML += '<BR>';
    } else {
        paresNomes.innerHTML += ' e ';
    }
    i++;
}