function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        //Bom dia
        img.src = 'imagens/manha250.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'imagens/tarde250.jpg'
        document.body.style.background = '#f0a35a'
    } else {
        //Boa noite
        img.src = 'imagens/noite250.jpg'
        document.body.style.background = '#5c85d6'
    }
}