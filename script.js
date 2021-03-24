function novoAluno (nome, idade) {
    return {nome,idade}
}

let alunos = [
    novoAluno("Mario",23),
    novoAluno("José",45),
    novoAluno("Marcia",29),
    novoAluno("João",35),
]

function somaNumeros (numero){
    let total = null;

    for (i=0; i < numero.length ; i++){
        total += numero[i].idade
    }
    return "total de idade é "+total;
}

function juntaNomes (pessoa){
    let junto = "";
    for (i=0; i <pessoa.length ; i++){
        junto += pessoa[i].nome
    }

    return "Esses são todos nomes juntos "+junto
}

console.log(somaNumeros(alunos))
console.log(juntaNomes(alunos))


// function idadeTurma (total, obj){
//     return  total + obj.idade
// }
// function nomeJunto (string, obj){
//     return string + obj.nome;
// }
// let numeroSomados = alunos.reduce(idadeTurma,0)
// let nomesJuntos = alunos.reduce(nomeJunto, "")
// console.log(numeroSomados)
// console.log(nomesJuntos)
