let numberGiven = prompt("Por favor, introduzca un número para saber si es par o impar:")

if (!isNaN(numberGiven)){
    numberGiven = parseFloat(numberGiven)
    if (numberGiven % 2 === 0){
        alert(`${numberGiven} es par.`)
    }else{
        alert(`${numberGiven} es impar.`)
    }
}else {
    alert("No has introducido un número.")
}