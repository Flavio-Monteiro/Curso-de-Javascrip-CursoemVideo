
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

}
function somar(){
    var dolarUS = window.document.querySelector('imput#dolar')
    var realRS = window.document.querySelector('imput#real')
    var resultado = window.document.getElementById('result')
    var US = Number('dolarUs.value')
    var RS = Number('ralRS.value')
    var conversao = US/RS
    resultado.innerHTML = conversao
    
}
