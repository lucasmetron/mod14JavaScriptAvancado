
let novoAluno = (nome, idade) => {
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario",23),
    novoAluno("Jose",45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35),
];

let jogadores = [
    novoAluno("Lucas",23),
    novoAluno("Lais",45),
    novoAluno("Camila", 29),
    novoAluno("Junior", 35)
];


function temMenos30(aluno){
    return aluno.idade < 30
}

function temMais30(aluno){
    return aluno.idade >= 30
}

// function filtro(callback){
//     let alunosFiltrados = []
//     for(aluno of this){
//         if (callback(aluno)){
//             alunosFiltrados.push(aluno)
//         }
//     }
//     return alunosFiltrados
// }

// alunos.filtro =filtro;

console.log(alunos.filter(temMais30));
console.log(jogadores.filter(temMais30));


// console.log(jogadores.filtro(temMenos30))

// let alunosMenos30 = alunos.filter(temMenos30)
// let alunosMaior30 = alunos.filter(temMais30)

// console.log(alunosMenos30)
// console.log(alunosMaior30)