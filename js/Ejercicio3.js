const name = prompt("Buenas! como te llamas?")
let hour = prompt("Que hora es?")

if(hour < 0 || hour > 24 || isNaN(hour)){
    alert("La hora introducida no es valida")
}else{
    hour = parseInt(hour)
    if(hour >= 5 && hour <=11){
        alert(`Buenos dias ${name}`)
    }else if(hour > 11 && hour <= 19){
        alert(`Buenas tardes ${name}`)
    }else {
        alert(`Buenas noches ${name}`)
    }
}
