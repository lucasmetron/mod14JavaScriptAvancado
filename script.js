function novoAluno (nome, idade) {
    return {nome,idade}
}

let alunos = [
    novoAluno("Mario",23),
    novoAluno("José",45),
    novoAluno("Marcia",29),
    novoAluno("João",35),
]

let juntaLetra = (string, primeiroNome) =>{
    return string + primeiroNome.nome;
}

console.log(alunos.reduce(juntaLetra,""))
console.log(alunos.reduce(juntaLetra,"Esses são todos nome juntos: "))


