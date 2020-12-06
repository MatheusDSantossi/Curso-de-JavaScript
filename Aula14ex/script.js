function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        // BOM DIA
        img.src = "modelo/manha.jpg"
        document.body.style.background = "lightyellow"
    }else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = "modelo/tarde.png"
        document.body.style.background = "orange"
    }else{
        //BOA NOITE
        img.src = "modelo/noite.png"
        document.body.style.background = "black"
    }
}
