function somar(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var tn3 = window.document.getElementById('txtn3')
    var tn4 = window.document.getElementById('txtn4')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value) 
    var n4 = Number(tn4.value)
    var s  = n1+n2+n3+n4
    res.innerHTML = `Total de Depesas: R$ ${s}`  
    if (s>2500){
        res.innerHTML = `Total de despesas ${s}  Voce estourou seu orçamento pois o seu salário é de R$ 2.500.00`
    }
    else{
        res.innerHTML = 'orçamento na média'
    }
}


