let btn = document.querySelector("#send3")

import nodemailer from "../node_modules/nodemailer"

let transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "rc7332470@gmail.com",
        pass: "pMzSS5$7PcCh"
    }
})

btn.addEventListener('click',()=>{
    console.log ("Botão clicado...")
    let enviar = transporter.sendMail({
        from: "Aiiiiii <rc7332470@gmail.com>",
        to: "tdfhdhrjek@gmail.com",
        subject: "Email enviado com Node.JS",
        text: "gg",
        html: "<h1>Oi</h1><br><p>Email enviado com Node.JSEmail enviado com Node.JSEmail enviado com Node.JS</p>"
    })
    
    enviar
    .then((mensagem)=>{
        console.log ("Deu certo "+mensagem)
    })
    
    enviar
    .catch ((mensagem)=>{
        console.log ("Deu errado "+mensagem)
    })
})
