// Variáveis
var send1 = document.getElementById('send1')
let send2 = document.getElementById('send2')
let backButton1 = document.querySelectorAll('.back-button')[0]
var nome = document.querySelectorAll('.input-send1')[0]
var sobrenome = document.querySelectorAll('.input-send1')[1]
var cpf = document.querySelectorAll('.input-send1')[2]
var dataNascimento = document.querySelectorAll('.input-send1')[3]
let senha = document.querySelectorAll(".input-send2 ")[1]
let cardContainer = document.querySelectorAll(".content-div")[0]
let cardNome = document.querySelectorAll('.card-info-digitada')[0]
let cardSobrenome = document.querySelectorAll('.card-info-digitada')[1]
let cardCPF = document.querySelectorAll('.card-info-digitada')[2]
let cardDataNascimento = document.querySelectorAll('.card-info-digitada')[3]
let content1 = document.querySelectorAll(".aside-dinamic-form")[0]
let content2 = document.querySelectorAll(".aside-dinamic-form")[1]

let requisitosSenha = document.querySelector("#requirements-container")
let numeros = ['1','2','3','4','5','6','7','8','9']
let requisitosSenhaMaiuscula = document.querySelectorAll('.check-passsword-icon')[0]
let requisitosSenhaMinuscula = document.querySelectorAll('.check-passsword-icon')[1]
let requisitosSenhaCaractereEspecial = document.querySelectorAll('.check-passsword-icon')[2]
let requisitosSenhaNumero = document.querySelectorAll('.check-passsword-icon')[3]
let requisitosSenha8Digitos = document.querySelectorAll('.check-passsword-icon')[4]

/*
Ao menos 1 letra maiúscula
Ao menos 1 letra minúscula
Ao menos 1 caractere especial
Ao menos 1 número
Ao menos 8 digitos

*/


let date = new Date
const dataAtual = {
    'dia': date.getDate(),
    'mes': (date.getMonth())+1,
    'ano': date.getFullYear()
}
let mes30dias = [4,6,9,11]
let mes31dias = [1,3,5,7,8,10,12]

const caracteresEspeciais = [
    "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@",
    "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "¨"
];
      
//==============================================================

// Funções
function erroInputInvalido(erro) {
    console.log("Input Inválido. Corrija "+erro)
}

function justNumbers(evento, tecla) {   
    if ((tecla != '0' && tecla != '1' && tecla != '2' && tecla != '3' && tecla != '4' && tecla != '5' && tecla != '6' && tecla != '7' && tecla != '8' && tecla != '9' && tecla != "backspace") || (tecla == " ")){       
        evento.preventDefault();
    }
}

function justLetters(evento, tecla) {   
    if (tecla == '0' || tecla == '1' || tecla == '2' || tecla == '3' || tecla == '4' || tecla == '5' || tecla == '6' || tecla == '7' || tecla == '8' || tecla == '9' ){
        evento.preventDefault();
    }
}

function éCaracterEspecial(evento, tecla) {
    caracteresEspeciais.forEach((a,index)=>{
        if (tecla == caracteresEspeciais[index]) {
            evento.preventDefault()
        }
    })
}

function éCaracterEspecialColado(evento) {
    let valorCopiado = evento.clipboardData.getData("text/plain")
    caracteresEspeciais.forEach((a,index)=>{
        if (valorCopiado == caracteresEspeciais[index]) {
            evento.preventDefault()
        }
    })
}

function éLetraColada(evento) {
    let tecla = evento.key
    let valorCopiado = evento.clipboardData.getData('text/plain')
    if ((tecla != '0' && tecla != '1' && tecla != '2' && tecla != '3' && tecla != '4' && tecla != '5' && tecla != '6' && tecla != '7' && tecla != '8' && tecla != '9' && tecla != "backspace") || (tecla == " ")){
        evento.preventDefault()        
    }
}

function checkChange(senha) {
    let requisitosSenhaMaiusculaCheck = /[A-Z]+/
    let requisitosSenhaMinusculaCheck = /[a-z]+/
    let requisitosSenhaCaractereEspecialCheck = /[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?]+/
    let requisitosSenhaNumeroCheck = /[0-9]+/
    let requisitosSenha8DigitosCheck = /^.{8,}$/
    
    // Verificar se tem 8 dígitos
    if (requisitosSenha8DigitosCheck.test(senha) == true) {
        requisitosSenha8Digitos.src = "../img/right.svg"
    }
    else {
        requisitosSenha8Digitos.src = "../img/wrong.svg"
    }

    // Verificar se tem letra maiúscula
    if (requisitosSenhaMaiusculaCheck.test(senha) == true) {
        requisitosSenhaMaiuscula.src = "../img/right.svg"
    }
    else {
        requisitosSenhaMaiuscula.src = "../img/wrong.svg"
    }

    // Verificar se tem letra minúscula
    if (requisitosSenhaMinusculaCheck.test(senha) == true) {
        requisitosSenhaMinuscula.src = "../img/right.svg"
    }
    else {
        requisitosSenhaMinuscula.src = "../img/wrong.svg"
    }

    // Verificar se tem caractere especial
    if (requisitosSenhaCaractereEspecialCheck.test(senha) == true) {
        requisitosSenhaCaractereEspecial.src = "../img/right.svg"
    }
    else {
        requisitosSenhaCaractereEspecial.src = "../img/wrong.svg"
    }

    // Verificar se tem número
    if (requisitosSenhaNumeroCheck.test(senha) == true) {
        requisitosSenhaNumero.src = "../img/right.svg"
    }
    else {
        requisitosSenhaNumero.src = "../img/wrong.svg"
    }
}

// Eventos

    // Nome
    nome.addEventListener('keypress',(evento)=>{
        éCaracterEspecial(evento,evento.key)
        justLetters(evento,evento.key)
        if (evento.key == " ") {
            evento.preventDefault()
        }
    })
    nome.addEventListener('paste', (evento)=>{
        éCaracterEspecialColado(evento)
    })

    // Sobrenome
    sobrenome.addEventListener('keypress',(evento)=>{
        éCaracterEspecial(evento,evento.key)
        justLetters(evento,evento.key)
    })
    sobrenome.addEventListener('paste',(evento)=>{
        éCaracterEspecialColado(evento)
    })

    // CPF - Máscara
    cpf.addEventListener('keypress',(evento)=>{
        justNumbers(evento,evento.key)
        let cpfQuantidade = cpf.value.length

        if (cpfQuantidade==3 || cpfQuantidade==7)  {
            cpf.value += "."
        }

        if (cpfQuantidade == 11) {
            cpf.value += "-"
        }
    })

    cpf.addEventListener('paste',(evento)=>{
        éCaracterEspecialColado(evento)
        éLetraColada(evento)
    })

    // Data de Nascimento - Máscara
    dataNascimento.addEventListener('keypress',(evento)=>{
        
        let quantidadeDataNascimento = dataNascimento.value.length
       
        if (quantidadeDataNascimento == 2 || quantidadeDataNascimento == 5) {
            dataNascimento.value += "/"
        }
    })

    // Data de Nascimento - Ajustar Data Digitada
    dataNascimento.addEventListener('keypress',(evento)=>{
        justNumbers(evento,evento.key)
        var partes = dataNascimento.value.split("/")
        var dia = partes[0]
        var mes = partes[1]
      //if (dataNascimento.value.length == 3 && dia > 31) { 
        if (dataNascimento.value.length == 3 && dia > 31) { 
           
            dataNascimento.value = "31/"
        }
        // Se falhar o bloqueio a caracteres especiais
        else if (dataNascimento.value.length == 3 && dia < 1) {
            dataNascimento.value = "01/"
        }        

        if (dataNascimento.value.length == 5 && mes < 1) {
            dataNascimento.value = `${dia}/01/`
        }

        if (dataNascimento.value.length == 6 && mes == 2 && dia>29) {
            dia = 28
            dataNascimento.value = `${dia}/${mes}/`
        }

       mes30dias.forEach((a,index)=>{
        // Se é um mês com 30 dias e o usuário digitar 31
        if (dataNascimento.value.length == 6 && mes30dias[index] == mes && dia>30) {
            dia = 30
            dataNascimento.value = `${dia}/${mes}/`
        }
       })
        
        if (mes > 12 && dataNascimento.value.length == 6) {
            dataNascimento.value = `${dia}/12/`
        }
    })

    dataNascimento.addEventListener('paste',(evento)=>{
        éCaracterEspecialColado(evento)
        éLetraColada(evento)
    })

    // Data de Nascimento - Ajustar Ano Digitado
    dataNascimento.addEventListener('focusout',()=>{
        let partes = dataNascimento.value.split("/")
        let ano = partes[2]
        let dia = partes[0]
        let mes = partes[1]

        if (ano>=dataAtual.ano && mes>dataAtual.mes) {
            dataNascimento.value = `${dia}/${mes}/${(dataAtual.ano)-1}`
        }
        else if (ano>=dataAtual.ano && mes<=dataAtual.mes){
            ano = dataAtual.ano
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

        cardDataNascimento.innerHTML = dataNascimento.value

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


nome.oninput= ()=>{
    cardNome.innerHTML = (nome.value).toUpperCase()
}

sobrenome.oninput = ()=>{
    cardSobrenome.innerHTML = (sobrenome.value).toUpperCase()
}


var iconUser = document.querySelectorAll(".icon-user")



var campos = document.querySelectorAll('.input-send1')
let labels =  document.querySelectorAll('form-dadosPessoais-label')

labels.forEach((a,index)=>{
    labels[index].addEventListener('click',()=>{
        //
    })
})


send1.addEventListener('click',()=>{
    content1.classList.add("esconder")
    content2.classList.remove("esconder")
    cardContainer.classList.add("esconder")
})

backButton1.addEventListener('click',()=>{
    content1.classList.remove("esconder")
    content2.classList.add("esconder")
    cardContainer.classList.remove("esconder")
})

// Eventos para o 2º Formulário: Credenciais

senha.oninput = (evento)=>{
    let tecla = evento.key
    console.log (""+senha.value)
    checkChange(senha.value)
}
