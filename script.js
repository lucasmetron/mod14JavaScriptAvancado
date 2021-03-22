let usuario = ["adriano","marcia","jose"]

function inserirUsuario(nome){

    let promise = new Promise (function(resolve, reject){
    
        setTimeout(() => {
            usuario.push(nome);
            let erro = false;

            if (!erro){
                resolve()
            } else {
                reject({msg: "Erro de conexão"})
            }
        }, 1000);
         
    })
    return promise;
}

function listarUsuarios(){
    console.log(usuario)
}

async function executar (){
    await inserirUsuario("lucas")
    listarUsuarios();
}

executar();