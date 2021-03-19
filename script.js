
function executar (){

    console.log(this.som)
}

var galinha = {
    som: "pó pó",
    falar: executar ,
}

var pato = {
    som: "quén quén",
    falar: executar ,
}

// pato.falar()
// galinha.falar()

executar()

var emitir = executar.bind(pato)
emitir();