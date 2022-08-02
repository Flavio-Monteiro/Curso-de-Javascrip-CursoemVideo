//Comdições aninhadas

var idade = 66
if(idade<16){
    console.log('Não vota')
}else{
   if (idade >= 16 && idade < 18){
    console.log('Voto Opcional')
   }
   else{
    console.log('Voto Obrigatório')
   }
   
}