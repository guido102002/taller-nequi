const prompt = require('prompt-sync')();

let pinCorrecto = "fernando123";
let numeroIntentos =1; 

let intento = prompt('Escribe tu contraseña');

while(intento !== pinCorrecto){
    console.log("Pin incorrecto");

    intento = prompt('Escribe la contraseña correcta')
    
    numeroIntentos = numeroIntentos + 1;
}

console.log("Registro exitoso, numeo de intentos ",numeroIntentos)



