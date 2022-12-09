let usuario = []

function start() {
    
    let nome = in_nome.value

    if(nome == '') {
        erro.innerHTML = `Digite um nome para prosseguir`
    } else {
        usuario.push(nome)
        erro.innerHTML = ``
        inicio.innerHTML = ``
    }


}