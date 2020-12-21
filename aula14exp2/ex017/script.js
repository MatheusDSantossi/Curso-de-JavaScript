function tabuada(){
    let num = window.document.getElementById("numero")
    let tab = window.document.getElementById("seltab")
    if(num.value.length == 0){
        window.alert("Por favor, digite um número!")
    }else{
        window.alert(num.length)
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ""
        while(c <= 10){
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
    // for(let c = 0; c < 10; c++){
    //     let mult = parseInt(num) * c
    //     mensg.innerHTML += `${numero} x ${c} = ${mult}<br>`
}

