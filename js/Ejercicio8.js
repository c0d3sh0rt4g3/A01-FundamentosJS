const givenString = prompt("Introduzca una frase para saber si es palíndromo")

const givenStringNoSpaces = givenString.split(" ").join("").toLowerCase()
const givenStringIntoArray = givenString.toLowerCase().split("")
const reversedGivenString = givenStringIntoArray.reverse().join("").split(" ").join("")

if (givenStringNoSpaces === reversedGivenString){
    alert(`${givenString} es un palíndromo`)
}else {
    alert(`${givenString} no es un palíndromo`)
}