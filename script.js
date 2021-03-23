let notasTurma1 = [10,5,8,7];

let notasTurma2 = [5,7,6,10];

let copia = [...notasTurma1, ...notasTurma2]

copia.push(2);

let media = ()=> {
    let somaNotas = null;
    for (i = 0; i < copia.length; i++){
        somaNotas = copia[i] + somaNotas
    }
    return somaNotas/copia.length
}

console.log(media())

console.log(notasTurma1)
console.log(notasTurma2)
console.log(copia)