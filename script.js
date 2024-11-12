console.log("script sendo lido corretamente");

const btn_depositar = document.getElementById("btn_depositar")
const btn_Investir = document.getElementById("btn_investir")
const valor = document.getElementById("valor")

let saldo = 0
let investimento_cliente = 0

btn_depositar.addEventListener("click", function () {
    saldo = saldo + parseFloat(valor.value) 
    console.log(`saldo cliente: ${saldo}`)
})

btn_Investir.addEventListener("click", function () {
    if (saldo > investimento_cliente) {
        saldo = saldo - parseFloat(valor.value)
        investimento_cliente = saldo
        console.log(`investimento cliente: ${investimento_cliente}`)
    }
    else {
        console.log("não se aplica, valor igual ou menor")
        alert("digite um valor menor para investir")
    }
    
})

function mostrarsaldo(){
    console.log(`saldo do cliente ${saldo} investimento do cliente ${investimento_cliente}`)
}

//investir = remover valor do saldo, e colocar o valor em investimentos do cliente


//parseFloat(valor.value)