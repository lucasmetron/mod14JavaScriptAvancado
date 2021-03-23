function novoAluno (nome, idade) {
    return {nome,idade}
}

let alunos = [
    novoAluno("Mario",23),
    novoAluno("José",45),
    novoAluno("Marcia",29),
    novoAluno("João",35),
]

function idadeDaTurma (total,aluno){
    total += aluno.idade
    return total 
} 

let totalIdadeAlunos = alunos.reduce(idadeDaTurma,0)

let media = (qtd, divisao) =>{
    let total = null;
    total = qtd/divisao;
    return total;
}

console.log(totalIdadeAlunos)
console.log("média do total de alunos: "+media(totalIdadeAlunos, alunos.length))


