

let usuario = []

function start() {

    let nome = in_nome.value

    if (nome == '') {
        erro.innerHTML = `Digite o seu nome para prosseguir`
    } else {
        usuario.push(nome)
        erro.innerHTML = ``
        inicio.innerHTML = ``



        Segunda_Tela.innerHTML =

            `
<body>
<div class="barra-navbar">
                <div class="img-footer2">
                    <img src="./img/robo.png" alt="robo" width="88px" height="86px">
                </div>
                
                <div class="usuario">
                <h2>Ola, ${usuario[0]}</h2>
            </div>

                </div>

</body>

        <footer>
            <div class="footer-segunda">
                <div class="txt-footer2">
                    <h2>Cruzadinha © 2022 . Todos os direitos reservados. Desenvolvido por Vitor Xavier e Viviana Marca
                    </h2>
                </div>
            </div>
        </footer>
`

    }


}