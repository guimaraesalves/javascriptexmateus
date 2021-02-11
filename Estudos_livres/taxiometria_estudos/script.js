function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))  
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)  
        res.innerHTML = ''  

    } else {
        window.alert('Valor inválido ou já Cadastrado!!');
    } 
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0
        let media = 0
        for(let i = 0; i < valores.length; i++) {
            soma += valores[i]
            if (valores[i] > maior){
                maior = valores[i]
            }
            if(valores[i] < menor){
            menor = valores[i]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos números é ${media}.</p>`
    }
}
