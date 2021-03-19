
let alunos = ["Lucas", "Lais", "Selina"]

function addAluno(nome, callback){
    setTimeout(() => {
        alunos.push(nome);
        callback();
    }, 2000);

   
}

function listarAlunos(){
    console.log(alunos)
}

addAluno("Carlos", listarAlunos);


