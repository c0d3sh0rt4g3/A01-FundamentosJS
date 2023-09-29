const name = prompt("Buenas! como te llamas?")
let hourInput = prompt("Que hora es?")
let hello
const hourInputRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

if (!hourInputRegex.test(hourInput)) {
    alert("Por favor, introduce la hora en el formato válido 'HH:MM'");
}else {
    let hourParts = hourInput.split(":");
    let hour = parseInt(hourParts[0])
    let minutes = parseInt(hourParts[1])

    if (minutes > 59) {
        alert("Los minutos no pueden ser mayores que 59.")
    }else {
          if (hour >= 5 && hour < 12) {
            hello = "Buenos días";
        } else if (hour >= 12 && hour < 18) {
            hello = "Buenas tardes";
        } else {
            hello = "Buenas noches";
        }

        alert(hello + ", " + name + "!")
    }
}