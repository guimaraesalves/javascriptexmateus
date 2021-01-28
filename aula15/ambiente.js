let num = [5, 8, 2, 9, 3]
num.push(7)
num.sort()


console.log(`Nosso vetor é o [${num}]`)
console.log(`O vetor possui ${num.length} elementos`)
//console.log(`O vetor ordenado é ${num.sort()}`)

//for(let posicao = 0; posicao < num.length; posicao ++) {
    //console.log(`A posição ${posicao} tem o valor ${num[posicao]}`)} 
    //percursso para execução do array

    for (let pos in num) {
        console.log(`A posição ${pos} tem o valor ${num[pos]}`)
    }

console.log(num.indexOf(7))

let pos = num.indexOf(3)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}

