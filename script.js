

function novoAluno (nome,idade){
    return {nome, idade}
}

// let alunos = [
//     novoAluno("Mario",23),
//     novoAluno("Jose",45),
//     novoAluno("Marcia",29),
//     novoAluno("Joao",35),
// ]

// let alunoDaquiA5anos = (aluno) => {
//     return aluno.idade +5
// }
// let maior30 = (aluno) => {
//     if (aluno.idade > 30){
//         return aluno
//     } 
// }

let alunos = [
    novoAluno("Mario",23),
    novoAluno("Jose",45),
    novoAluno("Marcia",29),
    novoAluno("Joao",35),
]
let novosAlunos = new Array(...alunos)
let novosAlunos = alunos.slice()
let novosAlunos = [...alunos]
novosAlunos.push(novoAluno("teste", 25))

console.log(alunos)
console.log(novosAlunos)

