let listaDeAmigos = [];

function adicionarAmigo() {
    let nomeDoAmigo = document.getElementById("amigo").value;
    listaDeAmigos.push(nomeDoAmigo);
    exibirNomeNaListaDoSorteio(nomeDoAmigo);
}

function exibirNomeNaListaDoSorteio(nome) {
    let lista = document.getElementById("listaAmigos");
    let celula = document.createElement("li");
    celula.innerHTML = nome;
    lista.appendChild(celula);

}