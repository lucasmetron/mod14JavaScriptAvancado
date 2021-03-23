function novoAluno (nome, idade) {
    return {nome,idade}
}

let alunos = [
    novoAluno("Mario",23),
    novoAluno("José",45),
    novoAluno("Marcia",29),
    novoAluno("João",35),
]

let menor30 = (aluno) => aluno.idade < 30

let juntaTudo = (aluno) => aluno.nome + " possui "+ aluno.idade + " anos."

let alunosMenores30 = alunos.filter(menor30)
let alunosJuntados = alunos.map(juntaTudo);

console.log(alunosMenores30.map(juntaTudo))
console.log(alunosJuntados)