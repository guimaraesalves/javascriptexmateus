
const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    var imc = peso / (altura * altura);

    if (nome !== '' && altura !== '' && peso !== '') {
        
        if (imc <= 18.5){
            alert("Magrela [magreza]")
        } 
        if (18.5 < imc <= 24.9) {
            alert("Tá bem hein? [normal]")
        }
        if (25,0 < imc <= 29.90){
            alert("Gordinho [sobrepeso]")
        }
        if (30.0 < imc < 39.9){
            alert("Balofo! [obesidade]")
        }
        if(imc > 40) {
            alert("Ô baleia! Você vai Morrer![obesidade grave]")
        }




    }else{
        alert ("Preencher todos os campos!!")
    }
    

    }

calcular.addEventListener('click', imc)