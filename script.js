

function novoAluno (nome,idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario",23),
    novoAluno("Jose",45),
    novoAluno("Marcia",29),
    novoAluno("Joao",35),
]


let nomeIdade = (aluno) => aluno.nome + " tem "+ aluno.idade + " anos."

let maior30 = (aluno) => {
    if (aluno.idade > 30){
        return aluno
    } 
}

let filterEmap = alunos.filter(maior30).map(nomeIdade)

console.log(filterEmap)

