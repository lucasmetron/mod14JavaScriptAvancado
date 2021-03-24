let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"
let realToDolar = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"
let realToEuro = "https://api.exchangeratesapi.io/latest?base=EUR&symbols=BRL"
let cotacaoDolar;
let cotacaoEuro;

function converter (){
    
    let = moedaSemi = document.getElementsByName("moeda")
    let moeda;
    let valor = document.getElementById("valor").value

    for(var i=0; i< moedaSemi.length; i++){
        if(moedaSemi[i].checked){
            moeda = moedaSemi[i].value;
        }
    }

    if (moeda == "dolar"){
        fetch(realToDolar)
        .then((res)=>{
          return res.json()
        }).then((data)=>{
            cotacaoDolar = data.rates.BRL;
            document.getElementById("resultado").innerHTML = "Valor em dolar: $"+cotacaoDolar * valor
        })
    } else {
        fetch(realToEuro)
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            cotacaoEuro = data.rates.BRL;
            document.getElementById("resultado").innerHTML = "Valor em euros: €"+cotacaoEuro * valor
        })
    }

   
    
    
}






















// let a = {
//     nome: "Lucas",
//     nota: 8.5,
// } 

// let b = JSON.stringify(a)
// let c = JSON.parse(b)


// console.log(url)