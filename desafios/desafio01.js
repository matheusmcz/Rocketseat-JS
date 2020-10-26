var endereco = {
    rua: "Rua B-51",
    numero: 349,
    bairro: "Benedito Bentes 1",
    cidade: "Maceió",
    uf: "Alagoas"
}

console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na ${endereco.rua}, número do prédio ${endereco.numero}.`)

function numerosPares (a, b) {
    for (var i = a; i <= b; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

numerosPares(2, 43)


const skills = [
    "Javascript",
    "ReactJS",
    "React Native"
];

const caseChange = skills.map(p => p.toUpperCase());

function habilidades (skillName) {

    const position = caseChange.indexOf(skillName)

    if (position !== -1){
        return console.log(true)
    }else {
    return console.log(false)
    }
}

habilidades("JAVASCRIPT")

function xp (years) {
    if(0 < years && years <= 1){
        return console.log ('Toddynho');
    } else if (1 < years && years <= 3){
        console.log('Não é mais um Toddynho');
    } else if (3 < years && years <= 6) {
        return console.log ('Tribo member');
    } else if (7 <= years) {
        return console.log ('Channel Subscriber');
    }
}


xp(2)


const usuario = [
    {
        nome: "Diego",
        habilidade: ["JavaScript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidade: ["Vuels", "Ruby on Rails", "Elixir"]
    }
];


function descricao () {
    const diegoHabilidades = usuario[0].habilidade.join(', ')
    const gabrielHabilidades = usuario[1].habilidade.join(', ')
    console.log(`${usuario[0].nome} possui as habilidades: ${diegoHabilidades}.`)
    console.log(`${usuario[1].nome} possui as habilidade: ${gabrielHabilidades}.`)

}

descricao()