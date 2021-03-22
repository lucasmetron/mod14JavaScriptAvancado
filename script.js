
let novoAluno = (nome, idade) => {
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario",23),
    novoAluno("Jose",45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)
];

function temMenos30(aluno){
    return aluno.idade < 30
}

function temMais30(aluno){
    return aluno.idade >= 30
}

let alunosMenos30 = alunos.filter(temMenos30)
let alunosMaior30 = alunos.filter(temMais30)

console.log(alunosMenos30)
console.log(alunosMaior30)