var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12 && hora >= 6){
    console.log('Bom Dia World!')
} else if (hora <= 18 && hora >= 12) {
    console.log("Boa Tarde Mundo!")
} else if (hora < 6) {
    console.log('Boa Madrugada Lua!')
} else {
    console.log('Boa Noite!')
}