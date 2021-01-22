function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 18
    msg.innerHTML = `Agora são ${hora} horas.<br>`
        
    if (hora >= 0 && hora < 12) {
        //Bom dia!        
        msg.innerHTML += `<strong>Bom dia!</strong>`
        img.src = 'imagens/manha.png'
        document.body.style.background = "#d6a625"
    }else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        msg.innerHTML += `<strong>Boa Tarde!</strong>`
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#d88461'
    } else {
        // Boa Noite!
        msg.innerHTML += `<strong>Boa Noite!</strong>`
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515151'
    }
}