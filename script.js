

function novoAluno (nome,idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario",23),
    novoAluno("Jose",45),
    novoAluno("Marcia",29),
    novoAluno("Joao",35),
]


let jogadores = [
    novoAluno("lais",23),
    novoAluno("lucas",45),
    novoAluno("wagner",29),
    novoAluno("bianca",35),
]

function temMenosde30(qualquercoisa){
    return qualquercoisa.idade < 30
}

function temMaisde30(qualquercoisa){
    return qualquercoisa.idade >= 30
}

let alunosMenosde30 = alunos.filter(temMenosde30)
let jogadoresMais30 = jogadores.filter(temMaisde30)

console.log(alunosMenosde30)
console.log(jogadoresMais30)

