
function myPromisse() {
    var inputElement = document.getElementById('addName').value;
    return new Promise(function (resolve, reject) {

        if (inputElement >= 18) {
            resolve();
        } else {
            reject();
        }
    });
}
function checaIdade() {
    setTimeout(function () {
        myPromisse()
            .then(function () {
                console.log("Maior que 18");
            })
            .catch(function () {
                console.log("Menor que 18");
            })
            .finally(setTimeout(function () {
                console.log('Done')
            }, 1000))
    }, 2000)

}

var inputElement = document.getElementById('userGit');
var buttonFind = document.getElementsByClassName('findGit');
var lista = document.querySelector('ul');
var load = document.getElementById('burrice');

async function getInput() {
    var userInput = inputElement.value;
    var loading = document.createElement('h4');
    var carregamento = document.createTextNode('Carregando...');
    loading.appendChild(carregamento);
    load.appendChild(loading);

    var repository = await buscar(userInput);
    loading.remove()
    for (banana of repository) {
        addlist(banana.name)
    }
}


function buscar(userName) {
    return fetch(`https://api.github.com/users/${userName}/repos`)
        .then(response => response.json().then(json => json))
}


function addlist(name) {
    var repositoryList = document.createElement('li');
    var repositoryName = document.createTextNode(name);
    repositoryList.appendChild(repositoryName);
    lista.appendChild(repositoryList);
}
