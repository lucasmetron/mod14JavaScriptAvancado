function dobro (x){
    console.log(this.x*2)
}

let triplo = function (y){
console.log(this.x*3)
}

let quadruplo = z => z*4

let numero = {
    x: 5,
    calc: dobro
}

let numero1 = {
    x: 100,
    calc: dobro
}

let numero2 = {
    x: 5,
    calc: dobro
}

numero.calc()

let numBind = dobro.bind(numero1)
numBind();