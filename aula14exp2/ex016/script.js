function contar(){
    inicio = window.document.getElementById("inicio").value
    fim = window.document.getElementById("fim").value
    passo = window.document.getElementById("passo").value
    var inicioIn = parseInt(inicio)
    var fimIn = parseInt(fim)
    var passoIn = parseInt(passo)
    mens = window.document.getElementById("msg")
    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        mens.innerHTML = "Por favor preencha os campos acima corretamente!"
    }else{
        mens.innerHTML = `Contando...<br>`
        if(passoIn <= 0){
            mens.innerHTML = `Considerando passo 1...<br>`
            passoIn = 1
        }
        for(var i = inicioIn; i <= fimIn; i += passoIn){
            mens.innerHTML += `${i} \u{1F4A8}`
        }
        mens.innerHTML += `${fim}\u{1F645}`
    }
}

// function contar(){
//     let ini = document.getElementById("inicio")
//     let fim = document.getElementById("fim")
//     let passo = document.getElementById("passo")
//     let mensg = document.getElementById("msg")
//     if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
//         mensg.innerHTML = "Impossível contar!"
//         // alert("[ERROR] Faltam dados!")
//     }else{
//         mensg.innerHTML = `Contando... `
//         let i = Number(ini.value)
//         let f = Number(fim.value)
//         let p = Number(passo.value)
//         if(p <= 0){
//             window.alert("Passo inválido! Considerando o passo 1.")
//             p = 1
//         }
//         if(i < f){
//             for(let c = i; c <= f; c += p){
//                 mensg.innerHTML += `${c} \u{1F449}`
//             }
//         }else{
//             for(let c = i; c >= f; c -= p){
//                 mensg.innerHTML += `${c} \u{1F449}`
//             }
//         }
//         mensg.innerHTML += `\u{1F3C1}`
//     }
//  }
