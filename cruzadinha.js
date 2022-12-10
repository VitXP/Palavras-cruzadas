let usuario = []

function start() {

    let nome = in_nome.value

    if (nome == '') {
        erro.innerHTML = `Digite o seu nome para prosseguir`
    } else {
        usuario.push(nome)
        erro.innerHTML = ``
        // inicio.innerHTML = ``

        window.location.href = "jogo.html"
    }

}

function carregar() {
    let usuario_atual = usuario[0]
}