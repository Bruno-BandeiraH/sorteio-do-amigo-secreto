let listaDeAmigos = [];

function adicionarAmigo() {
    if(document.getElementById("amigo").value) {
        let nomeDoAmigo = document.getElementById("amigo").value;
        listaDeAmigos.push(nomeDoAmigo);
        exibirNomeNaListaDoSorteio(nomeDoAmigo);
    } else {
        alert("Por favor insira um nome válido.");
    }
}

function exibirNomeNaListaDoSorteio(nome) {
    let lista = document.getElementById("listaAmigos");
    let celula = document.createElement("li");
    celula.innerHTML = nome;
    lista.appendChild(celula);
}

function sortearAmigo() {
    let indiceAleatorio = parseInt(Math.random() * listaDeAmigos.length);
    document.getElementById("listaAmigos").setAttribute("style", "display: none");
    let amigoSorteado = listaDeAmigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
}
