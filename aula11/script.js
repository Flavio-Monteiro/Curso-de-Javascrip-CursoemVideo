
function calcular(){
    var txtv = window.document.querySelector('input#txtvel')
    var res =window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de:<strong> ${vel} Km/h</strong></p>`
    if (vel>60){
        res.innerHTML += 'Você está MULTADO por Excesso de velocidade!'
    }else{
        res.innerHTML += 'Dirija Sempre com cinto de Segurança!'
    }



    var cotacaous = window.document.querySelector('input#dolar')
    var cotacaobr = window.document.querySelector('input#real')
    var cotacaovalo = cotacaous * cotacaobr 
    var resultado = window.document.querySelector('result')
    resultado.innerHTML=cotacavalo

}
console.log('cotacaovalo')