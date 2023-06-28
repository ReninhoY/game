// Variáveis
var send1 = document.getElementById('send1')
var nome = document.querySelectorAll('.input-send1')[0]
var sobrenome = document.querySelectorAll('.input-send1')[1]
var cpf = document.querySelectorAll('.input-send1')[2]
var dataNascimento = document.querySelectorAll('.input-send1')[3]
let date = new Date
const dataAtual = {
    'dia': date.getDate(),
    'mes': (date.getMonth())+1,
    'ano': date.getFullYear()
}
const meses = {
    '30dias': [4,6,9,11],
    '31dias': [1,3,5,7,8,10,12]
}
//==============================================================

// Funções
function erroInputInvalido(erro) {
    console.log("Input Inválido. Corrija "+erro)
}

function justNumbers(evento,tecla) {   
    if (tecla != 0 && tecla != 1 && tecla != 2 && tecla != 3 && tecla != 4 && tecla != 5 && tecla != 6 && tecla != 7 && tecla != 8 && tecla != 9 ){
        evento.preventDefault();
    }
}

function justLetters(evento,tecla) {   
    if (tecla == 0 || tecla == 1 || tecla == 2 || tecla == 3 || tecla == 4 || tecla == 5 || tecla == 6 || tecla == 7 || tecla == 8 || tecla == 9 ){
        evento.preventDefault();
    }
}


// Eventos

    // Nome
    nome.addEventListener('keydown',(evento)=>{
        justLetters(evento,evento.key)
        if (evento.key == " ") {
            evento.preventDefault()
        }
    })

    // Sobrenome
    sobrenome.addEventListener('keydown',(evento)=>{
        justLetters(evento,evento.key)
    })

    // CPF - Máscara
    cpf.addEventListener('keydown',(evento)=>{
        let cpfQuantidade = cpf.value.length

        justNumbers(evento,evento.key)

        if (cpfQuantidade==3 || cpfQuantidade==7)  {
            cpf.value += "."
        }

        if (cpfQuantidade == 11) {
            cpf.value += "-"
        }
    })

    // Data de Nascimento - Máscara
    dataNascimento.addEventListener('keydown',()=>{
        
        let quantidadeDataNascimento = dataNascimento.value.length
       
        if (quantidadeDataNascimento == 2 || quantidadeDataNascimento == 5) {
            dataNascimento.value += "/"
        }
    })

    // Data de Nascimento - Ajustar Data Digitada
    dataNascimento.addEventListener('keydown',(evento)=>{
        justNumbers(evento,evento.key)
        var partes = dataNascimento.value.split("/")
        var dia = partes[0]
        var mes = partes[1]
      //if (dataNascimento.value.length == 3 && dia > 31) { 
        if (dataNascimento.value.length == 3) { 
            meses.Adias.forEach((a,index)=>{
                console.log("33333")
            })
            dataNascimento.value = "31/"
        }   

        if (dataNascimento.value.length == 3 && dia < 1) {
            dataNascimento.value = "01/"
        }

        if (dataNascimento.value.length > 5 && mes < 1) {
            dataNascimento.value = `${dia}/01/`
        }

        if (mes == 2 && dia>29) {
            dia == 28
            dataNascimento.value = `${dia}/${mes}`
        }
        
        if (mes > 12) {
            dataNascimento.value = `${dia}/12/`
        }
    })

    // Data de Nascimento - Ajustar Ano Digitado
    dataNascimento.addEventListener('focusout',()=>{
        let partes = dataNascimento.value.split("/")
        let ano = partes[2]
        let dia = partes[0]
        let mes = partes[1]

        if (ano>dataAtual.ano && mes<dataAtual.mes) {
            dataNascimento.value = `${dia}/${mes}/${dataAtual.ano}`
        }
        else if (ano>dataAtual.ano && mes>dataAtual.mes){
            ano = dataAtual.ano-1
            dataNascimento.value = `${dia}/${mes}/${ano}`
        }

        if (ano<1900) {
            ano = 1900
            dataNascimento.value = `${dia}/${mes}/${ano}`
        }

        // Data de Nascimento - Verificar se é ano bissexto

        if (dia==29 && mes==2 && ano != 0 && ano%4!=0) {
            dataNascimento.value = `28/02/${ano}`
        }
    })


    // Input Data de Nascimento - Ocultar e exibir o placeholder com eventos
    let a = document.getElementById("aniversario")
    a.addEventListener('focus',()=>{
        a.placeholder = "dd/mm/aaaa"
    })
    a.addEventListener('focusout',()=>{
        a.placeholder=""
    })

    


// Card ==========================================================================================

let cardNome = document.querySelectorAll('.card-info-digitada')[0]

nome.oninput= ()=>{
    cardNome.innerHTML = (nome.value).toUpperCase()
}

nome.addEventListener('keydown',(evento)=>{
    if (evento.key == " " || isNaN(evento.key)) { // PAREI AQUI ==================================================================
        
    }
})

var iconUser = document.querySelectorAll(".icon-user")



var campos = document.querySelectorAll('.input-send1')
let labels =  document.querySelectorAll('form-dadosPessoais-label')

labels.forEach((a,index)=>{
    labels[index].addEventListener('click',()=>{
        //
    })
})

campos.forEach((a,index)=>{
    campos[index].addEventListener('focus',()=>{
        iconUser[0].classList.remove("icon-campo-focusout")
    })
    campos[index].addEventListener('focusout',()=>{
        if (nome.value == "" && dataNascimento.value == "" && cpf.value == "" && sobrenome.value == "") {
            setTimeout(()=>{
                iconUser[0].classList.add("icon-campo-focusout")
            },1000)
        }
    })
})

// Lembrar de incluir o LABELCLICK no recebimento de classes, já que ao clicar nela o input entra em FOCUS também.
