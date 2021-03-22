
let alunos = ["Lucas", "Lais", "Selina"]

function addAluno(nome){

    let promise = new Promise(function(resolve, reject){

        setTimeout(() => {
            alunos.push(nome);
            let error = false;

            if(!error){
                resolve()
            }else{
                reject({msg: "erro 1"})
            }


        }, 1000);

    })


    return promise


   
}

function listarAlunos(){
    console.log(alunos)
}

addAluno("Carlos")
.then(listarAlunos)
.catch((error) => {console.log(error.msg)});


