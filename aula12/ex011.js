var idade = [12, 15, 17, 19]
console.log(`Você tem ${idade[4]} anos.`)
for(let i = 0; i < idade.length; i++){
    if(idade[i] < 16){
        console.log(`Não vota!`)
    }else if(idade < 18 || idade > 65){
        console.log(`Voto opcional!`)
    }else if(idade >= 18){
        console.log(`Voto obrigátorio!`)
    }else {
        console.log(`Voto `)
    }
}
