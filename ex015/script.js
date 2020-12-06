function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("Verifique os dados e tente novamente!")
    }else{
        var fsex = document.getElementsByName("radisex")
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if(fsex[0].checked){
            gênero = "Homem"
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute("src", "2crianças.jpg")
            }else if(idade < 21){
                //jovem
                img.setAttribute("src", "adolescente.jpg")
            }else if(idade <= 40){
                //adulto
                img.setAttribute("src", "adulto.jpg")
            }else{
                //velho
                img.setAttribute("src", "velho.jpg")
            }
        }else if(fsex[1].checked){
            gênero = "mulher"
            if(idade >= 0 && idade < 10){
                img.setAttribute("src", "bebe.jpg")
            }else if(idade < 21){
                img.setAttribute("src", "mulher_adulta.jpg")
            }else if( idade <= 40){
                img.setAttribute("src", "adulta.jpg")
            }else{
                img.setAttribute("src", "velha.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
        res.appendChild(img)
    }
}