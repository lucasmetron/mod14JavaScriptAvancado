
// Exemplo simples de callback

// function ola(){
//     console.log("ola")
// }

// function tchau(){
//     console.log("tchau")
// }


// function saudacao(s,nome){
//     s();
//     console.log(nome)
// }


saudacao(tchau, "lucas")

let usuario = ["adriano","marcia","jose"]

function inserirUsuario(nome, callback){
    setTimeout(() => {
        usuario.push(nome);
        callback();
    }, 1000);
}

function listarUsuarios(){
    console.log(usuario)
}

inserirUsuario("lucas", listarUsuarios)
