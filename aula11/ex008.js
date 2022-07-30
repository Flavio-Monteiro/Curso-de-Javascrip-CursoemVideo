//CONDIÇÃP  [SIMPLES]

var vel = 100
if (vel>60){
    console.log(`A velocidade do seu carro é: ${vel}Km/h`)
    console.log('Você ultrapassou o Limite de Velocidade, MULTADO!')
}
var dolar =5.26
var real =100
var conversaord =Number (  real/dolar)
var conversaodr =Number (dolar*real)

console.log(`Valor do dólar U$ ${dolar}`)
console.log(`Valor em Real R$ ${real}`)
console.log(`R$ ${real.toFixed(2)} convertidos em dolár U$ ${conversaord.toFixed(2)} `)
console.log(`U$ ${dolar.toFixed(2)} convertidos em: R$  ${conversaodr.toFixed(2)}`)




console.log('Dirija sempre usando sinto de Segurança.')