let usuario = []

function start() {

    let nome = in_nome.value

    if (nome == '') {
        erro.innerHTML = `Digite o seu nome para prosseguir`
    } else {
        usuario.push(nome)
        erro.innerHTML = ``
        // inicio.innerHTML = ``
        sessionStorage.NOME = usuario[0]
        window.location.href = "jogo.html"
    }

}

function carregar() {
    let usuario_nome = sessionStorage.NOME
    usuario_atual.innerHTML = usuario_nome; 
}