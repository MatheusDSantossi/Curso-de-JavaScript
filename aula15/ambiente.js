let num = [5, 8, 2, 9, 3]
num[3] = 6
num.sort()
num.push(1)
console.log(num)
let pos = num.length
console.log(`Nosso vetor tem ${pos} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

// for(let i = 0; i < pos; i++){
//     console.log(`O valor do vetor é ${num[i]}`)
// }

let index = num.indexOf(2)
if(index == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor 8 ta na posição ${index + 1}`)
}