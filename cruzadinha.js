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
        window.location.href = "cruzadinha.html"
    }

}

function carregar() {
    let usuario_nome = sessionStorage.NOME
    usuario_atual.innerHTML = usuario_nome;
}

// VARIAVEL GLOBAL RESPOSTA
let respondendo = 1

function resposta() {
    resultado.innerHTML = ``

    if (respondendo == 1)
        resultado.innerHTML = `CPU`
    else if (respondendo == 2) {
        resultado.innerHTML = `ULA`
    } else if (respondendo == 3) {
        resultado.innerHTML = `REGISTRADORES`
    } else if (respondendo == 4) {
        resultado.innerHTML = `ROM`
    } else if (respondendo == 5) {
        resultado.innerHTML = `EPROM`
    } else if (respondendo == 6) {
        resultado.innerHTML = `RAM`
    } else if (respondendo == 7) {
        resultado.innerHTML = `FLASH`
    } else if (respondendo == 8) {
        resultado.innerHTML = `MEMORIA DE MASSA`
    } else if (respondendo == 9) {
        resultado.innerHTML = `DMA`
    }  else if (respondendo == 10) {
        resultado.innerHTML = `CS`
    } else if (respondendo == 11) {
        resultado.innerHTML = `ADRESS BUS`
    } else if (respondendo == 12) {
        resultado.innerHTML = `DATA BUS`
    } else if (respondendo == 13) {
        resultado.innerHTML = `I7`
    } else if (respondendo == 14) {
        resultado.innerHTML = `I5`
    } else if (respondendo == 15) {
        resultado.innerHTML = `QUAD CORE`
    } else {
        resultado.innerHTML = `DUAL CORE`
    }
}

function verificar() {
    erro_resposta.innerHTML = ''

    if (respondendo == 1) {
        let resposta1 = in_palavra_1[0].value
        resposta1 += in_palavra_1[1].value
        resposta1 += in_palavra_1[2].value

        if (resposta1 == 'cpu') {
            in_palavra_1[0].style = "border-color: green;";
            in_palavra_1[1].style = "border-color: green;";
            in_palavra_1[2].style = "border-color: green;";

            proxima()
        } else {
            in_palavra_1[0].style = "border-color: red;";
            in_palavra_1[1].style = "border-color: red;";
            in_palavra_1[2].style = "border-color: red;";
            erro_resposta.innerHTML = `<img src="./img/error.png" alt="robo" width="250px" height="250px">`
        }
    } else if (respondendo == 2) {
        let resposta2 = in_palavra_2[0].value
        resposta2 += in_palavra_16[2].value
        resposta2 += in_palavra_2[1].value

        if (resposta2 == 'ula') {
            in_palavra_2[0].style = "border-color: green;";
            in_palavra_16[2].style = "border-color: green;";
            in_palavra_2[1].style = "border-color: green;";

            proxima()
        } else {
            in_palavra_2[0].style = "border-color: red;";
            in_palavra_16[2].style = "border-color: red;";
            in_palavra_2[1].style = "border-color: red;";
            erro_resposta.innerHTML = `<img src="./img/error.png" alt="robo" width="250px" height="250px">`
        }

    }else if (respondendo == 3) {
        let resposta3 = in_palavra_3[0].value
        resposta3 += in_palavra_3[1].value
        resposta3 += in_palavra_3[2].value
        resposta3 += in_palavra_3[3].value
        resposta3 += in_palavra_3[4].value
        resposta3 += in_palavra_3[5].value
        resposta3 += in_palavra_3[6].value
        resposta3 += in_palavra_3[7].value
        resposta3 += in_palavra_3[8].value
        resposta3 += in_palavra_3[9].value
        resposta3 += in_palavra_3[10].value
        resposta3 += in_palavra_3[11].value
        resposta3 += in_palavra_3[12].value

        if (resposta3 == 'registradores') {
            in_palavra_3[0].style = "border-color: green;";
            in_palavra_3[1].style = "border-color: green;";
            in_palavra_3[2].style = "border-color: green;";
            in_palavra_3[3].style = "border-color: green;";
            in_palavra_3[4].style = "border-color: green;";
            in_palavra_3[5].style = "border-color: green;";
            in_palavra_3[6].style = "border-color: green;";
            in_palavra_3[7].style = "border-color: green;";
            in_palavra_3[8].style = "border-color: green;";
            in_palavra_3[9].style = "border-color: green;";
            in_palavra_3[10].style = "border-color: green;";
            in_palavra_3[11].style = "border-color: green;";
            in_palavra_3[12].style = "border-color: green;";


            proxima()
        } else {
            in_palavra_3[0].style = "border-color: red;";
            in_palavra_3[1].style = "border-color: red;";
            in_palavra_3[2].style = "border-color: red;";
            in_palavra_3[3].style = "border-color: red;";
            in_palavra_3[4].style = "border-color: red;";
            in_palavra_3[5].style = "border-color: red;";
            in_palavra_3[6].style = "border-color: red;";
            in_palavra_3[7].style = "border-color: red;";
            in_palavra_3[8].style = "border-color: red;";
            in_palavra_3[9].style = "border-color: red;";
            in_palavra_3[10].style = "border-color: red;";
            in_palavra_3[11].style = "border-color: red;";
            in_palavra_3[12].style = "border-color: red;";
      
            erro_resposta.innerHTML = `<img src="./img/error.png" alt="robo" width="250px" height="250px">`
        }
    }else if (respondendo == 4) {
        
    }else if (respondendo == 5) {
        
    }else if (respondendo == 6) {
        
    }else if (respondendo == 7) {
        
    }else if (respondendo == 8) {
        
    }else if (respondendo == 9) {
        
    }else if (respondendo == 10) {
        
    }else if (respondendo == 11) {
        
    }else if (respondendo == 12) {
        
    }else if (respondendo == 13) {
        
    }else if (respondendo == 14) {
        
    }else if (respondendo == 15) {
        
    }else if (respondendo == 16) {
        
    }
}

function proxima() {
    resultado.innerHTML = ``
    erro_resposta.innerHTML = ''

    if (respondendo == 1) {
        dica_1.style.display = 'none'
        dica_2.style.display = 'block'

        respondendo++
    } else if (respondendo == 2) {
        dica_2.style.display = 'none'
        dica_3.style.display = 'block'

        respondendo++
    } else if (respondendo == 3) {
        dica_3.style.display = 'none'
        dica_4.style.display = 'block'

        respondendo++
    } else if (respondendo == 4) {
        dica_4.style.display = 'none'
        dica_5.style.display = 'block'

        respondendo++
    }else if (respondendo == 5) {
        dica_5.style.display = 'none'
        dica_6.style.display = 'block'

        respondendo++
    }else if (respondendo == 6) {
        dica_6.style.display = 'none'
        dica_7.style.display = 'block'

        respondendo++
    }else if (respondendo == 7) {
        dica_7.style.display = 'none'
        dica_8.style.display = 'block'

        respondendo++
    }else if (respondendo == 8) {
        dica_8.style.display = 'none'
        dica_9.style.display = 'block'

        respondendo++
    }else if (respondendo == 9) {
        dica_9.style.display = 'none'
        dica_10.style.display = 'block'

        respondendo++
    }else if (respondendo == 10) {
        dica_10.style.display = 'none'
        dica_11.style.display = 'block'

        respondendo++
    }else if (respondendo == 11) {
        dica_11.style.display = 'none'
        dica_12.style.display = 'block'

        respondendo++
    }else if (respondendo == 12) {
        dica_12.style.display = 'none'
        dica_13.style.display = 'block'

        respondendo++
    }else if (respondendo == 13) {
        dica_13.style.display = 'none'
        dica_14.style.display = 'block'

        respondendo++
    }else if (respondendo == 14) {
        dica_14.style.display = 'none'
        dica_15.style.display = 'block'

        respondendo++
    }else if (respondendo == 15) {
        dica_15.style.display = 'none'
        dica_16.style.display = 'block'

        respondendo++
    } else if (respondendo == 16) {
        dica_16.style.display = 'none'
        dica_1.style.display = 'block'

        respondendo = 1
    } 
}



