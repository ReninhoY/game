const args = {
    name: 'JavaScriiipt',
    email: 'tdfhdhrjek@gmail.com',
    message: '7'
}

const serviceID = 'service_p6papyi'
const templateID = 'template_jvp5jwj'

function enviar () {
    send(serviceID,templateID)
    .catch((msg)=>{
        console.log ("Erro -> "+msg)
    })
}

let btn = document.getElementById('send3')

btn.addEventListener('click',()=>{
    enviar()
})