function novoAluno (nome, idade) {
    return {nome,idade}
}

let alunos = [
    novoAluno("Mario",23),
    novoAluno("José",45),
    novoAluno("Marcia",29),
    novoAluno("João",35),
]

function juntaTudo(obj){
    let arrayTudo = [];
    let juntador;
    for(i=0; i< obj.length; i++){
        juntaTudo = obj[i].nome + " possui "+obj[i].idade+ " anos."
        arrayTudo.push(juntaTudo)
    }
    return arrayTudo;
}

function trocaChave(obj){
    for(i=0; i< obj.length; i++){
        return {name: obj[i].nome, age: obj[i].idade}
        
    }
}

console.log(trocaChave(alunos))
console.log(juntaTudo(alunos))

// function juntaIdadeNome (obj) {
//     let soma = obj.idade + 5;
//     return obj.nome + " possui "+obj.idade+ " anos. E daqui 5 anos "+obj.nome+ " terá: "+soma
// }

// function mudaChave(obj){
//     return {
//         name: obj.nome,
//         age: obj.idade
//     }
// }
// console.log(alunos.map(juntaIdadeNome))
// console.log(alunos.map(mudaChave))
