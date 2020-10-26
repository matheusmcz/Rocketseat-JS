// pegando o botao e a lista nao ordenada
const buttonElement = document.getElementById('novo');
const blockELement = document.getElementById('quadrado');

// funcao que cria um list item
buttonElement.onclick = function () {
    const block = document.createElement('li');
    // alterando tamanho e cor de fundo da li
    block.style.width = "100px";
    block.style.height = "100px";
    block.style.backgroundColor = "#F00";

    // funcao ativada pelo mouse over
    block.onmouseover = function () {
        block.style.backgroundColor = getRandomColor();
    };
    // criando o quadrado
    blockELement.appendChild(block)
}

// funcao que selecionar uma cor aleatoria
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};



var nomes = ["Diego", "Gabriel", "Lucas"];

// pegando a lista e a input
var elementList = document.getElementById('nomes');

var inputNewName = document.getElementById('nome');

for (name of names) {
    adicionaItem(name);
}

// cria um list item 
function adicionaItem(name) {
    var elementChild = document.createElement('li');
    var text = document.createTextNode(name);

    elementChild.appendChild(text);
    elementList.appendChild(elementChild);
}

// funcao que apaga o valor da input apos clicar no botao

function adicionar() {
    adicionaItem(inputNewName.value);

    inputNewName.value = "";
}