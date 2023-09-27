let values = [true, 5, false, "hola", "adios", 2]

const palabra1 = values[3]
const palabra2 = values[4]

if(palabra1.length > palabra2.length){
    alert(`${palabra1} tiene mas longitud que ${palabra2}`)
}else if (palabra1.length < palabra2.length){
    alert(`${palabra1} tiene menos longitud que ${palabra2}`)
}else {
    alert(`${palabra1} tiene la misma longitud que ${palabra2}`)
}

const boolean1 = values[0]
const boolean2 = values[2]

alert(boolean1 === boolean2)
alert(boolean1 !== boolean2)

let numero1 = values[1]
let numero2 = values[5]

alert("Suma: " + (numero1 + numero2))
alert("Resta: " + (numero1 - numero2))
alert("Multiplicación: " + (numero1 * numero2))
alert("División: " + (numero1 / numero2))
alert("Módulo: " + (numero1 % numero2))
