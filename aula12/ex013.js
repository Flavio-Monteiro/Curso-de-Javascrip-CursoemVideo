//[SWITCH] é e função ESCOLHA CASO. caso expressao ano for a verdadeira, escolha a próxima e o DEFAULT, é tipo OUTROCASO 
//Caso nenhuma das expressões seja a verdadeira. ENÃO Equecer de colocar o comando BREAK após a condição CASE.

var agora = new Date()
var diaSem = agora.getDay()
var horario =new Date()
var hora = horario.getHours()
console.log(`Agora são exatamente ${hora} horas `)


switch (diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERROR!] Dia Inválido!')
}