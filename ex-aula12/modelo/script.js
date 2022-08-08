function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res =  document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERROR] Veriique os dados e tente novamente!')
    }else{
       var fsex = window.document.getElementsByName('radsex')
       var idade = ano- Number(fano.value)
       var genero = ''
       var img = document.createElement('img') //inserir uma imagem dinamicamente sem usar o html
       img.setAttribute('id','foto') // cria um Id 'foto' na variavel img
        if (fsex[0].checked){
            genero = 'Homem'

            if (idade >= 0 && idade <= 10){
                //criança
            }else if (idade > 21){
                //joven
            }else if(idade < 50){
                 //adlto
            }else{
                //idoso
            }
               

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <=10){
            //criança
            }else if (idade > 21){
                //jove
            }else if (idadde < 50){
                //adulto
            }else{
                //idoso
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.style.textAlign ='center'
    }
}