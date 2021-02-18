window.addEventListener('load', start);

//Declarando Variáveis Globais
var GlobalNames = [];
var nomes = document.querySelector('#nomes');
var ul = document.createElement('ul');
var Input = document.getElementById('Input');
var form = document.getElementById('Formulario');
var isEditing = false;
var posicao;

function start(){
    PrevenirComportamentoDeFault(form);
    AplicarFoco(Input);
    CapturarValoresDigitados(Input);
    ExibirVetor();
}

function PrevenirComportamentoDeFault(Objeto){
    Objeto.addEventListener('submit', function(event) {
        event.preventDefault();
    });
}

function AplicarFoco(Objeto) {
    Objeto.focus();
}

function CapturarValoresDigitados(Objeto) {
    Objeto.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            var ValorDigitado = event.target.value; //Obtendo conteudo digitado

            // se algum valor tiver sido digitado, então editar ou inserir
            if (ValorDigitado) {
                if(isEditing) {
                    // Editando valores
                    GlobalNames.splice(posicao, -1, ValorDigitado);
                    isEditing = false; // Desativando modo de edição
                } else {
                    // Inserindo valores
                    GlobalNames.push(ValorDigitado); // Inserindo no array GlobalNomes
                }
            }

            ExibirVetor(); //Atualizar site e Exibir vetor com novo valor
        }        
    });
}

function ExibirVetor() {
    // Limpando conteudo da ul e input para receber novos valores
    ul.innerHTML = '';
    Input.value = '';

    // Para cada posição do vetor, executar a função PercorrerVetor
    GlobalNames.forEach(PercorrerVetor);
    nomes.appendChild(ul); //Adicionar ul na div nomes para ser exibida na tela
}

function PercorrerVetor(item) {
    var li = document.createElement('li');

    li.appendChild(CriarBotao()); // Cria e adiciona o botao x na li
    li.appendChild(CriarSpan(item)); //Cria e adiciona o span na li
    ul.appendChild(li); //Adicioanando li na ul
}

function CriarBotao(){
    var botao = document.createElement('button');
    // Adicionando classe DeleteButton
    botao.classList.add('DeleteButton');
    botao.textContent = 'x'; //adicioando conteudo x dentro do botão

    // Retornando botão criado ao ponto de chamada desta função
    return botao;
}


function CriarSpan(valor) {
    var span = document.createElement('span');
    span.textContent = valor; // Adicionando o valor dentro do span
    span.classList.add('clicavel');
    span.addEventListener('click', EditarItem);
    // Retornando valor dentro do span
    return span;
}

function EditarItem(event) {
    // Capturando valor do elemento clicado
    var valor = event.target.innerHTML;

    var index = GlobalNames.indexOf(valor); // Identificando índice
    Input.value = GlobalNames[index];
    AplicarFoco(Input); // Aplicando Foco no Input
    isEditing = true;
    posicao = index;
}


// Deletando elementos da lista que forem clicados
ul.addEventListener('click', function(event) {
    // Realizar evento apenas quando o usuário clicar no botão
    if (event.target.localName == 'button') {
        // Capturando valor do elemento clicando
        var valor = event.srcElement.nextElementSibling.innerHTML;

        // Deletando elemento de Global Names
        var index = GlobalNames.indexOf(valor); // Indentificando índice
        GlobalNames.splice(index, 1);

        var ancestral = event.target.parentElement;
        ancestral.remove(); // Removendo elemento do site
        ExibirVetor(); //Atualizar site e Exibir vetor com novo valor
    }
});