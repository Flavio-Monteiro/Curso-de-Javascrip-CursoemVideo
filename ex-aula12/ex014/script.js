function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = ` Bom Dia, agora  são  ${hora} horas.`
    document.body.style.fontSize ='1.5em'
    var rodape = window.document.querySelector('#footer')
    rodape.style.background = 'black'
    if (hora>=0 && hora<12){
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background ='#faead8'
    }else if(hora >=12 && hora <=18){
        //BOA TARDE!
        img.src= 'fototarde.png'
        msg.innerHTML = ` Boa tarde, agora  são  ${hora} horas.`
        document.body.style.background = '#796967'
    }else{
        //BOA NOITE!
        msg.innerHTML = ` Boa noite, agora  são  ${hora} horas.`
        img.src='fotonoite.png'
        document.body.style.background = '#002032'
        
    }
   
}

