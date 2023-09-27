const name = prompt("Buenas! como te llamas?")
const hour = parseInt(prompt("Que hora es?"))

if(hour >= 5 && hour <=11){
    alert(`Buenos dias ${name}`)
}else if(hour > 11 && hour <= 19){
    alert(`Buenas tardes ${name}`)
}else {
    alert(`Buenas noches ${name}`)
}
