
let dobro = () => {
    console.log(this.x*2)
}

let dobro = (x) => {
    console.log(x*2)
}

let dobro = x => console.log(x*2)

let dobro = function(){
    console.log(this.x*2)
}

let numero = {
    x: 8,
    calc: dobro
}

dobro(15);

