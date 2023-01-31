


let edad = 0;
let altura = 0;
let genero = "";
let peso = 0;

portero();

function portero() {
edad = Number(prompt("Ingrese su edad"));
if (edad >= 18) {
alert("Puede entrar");
altura = Number(prompt("Ingrese su altura en metro (1.7)"));
peso = Number(prompt("Ingrese su peso en kilogramos (75)"));
genero = prompt("Ingrese su genero \n'm' para mujer \n'h' para hombre");
genero = genero.toLowerCase();
while(genero !== "h" && genero !=="m"){
    alert("Genero incorrecto")
    genero = prompt("Ingrese su genero \n'm' para mujer \n'h' para hombre");   
  }
menu();
} else {
alert("No puede entrar");
}
}

function menu() {
let entrada = prompt("Elija su opcion, escriba 'esc' para terminar. \n1 - IMC\n2 - TMB");
entrada = entrada.toLowerCase();
if (entrada == 1) {
calcularIMC(peso, altura, genero);
} else if (entrada == 2) {
    calcular_Metabolismo_Basal(edad, peso, altura, genero)
} else if (entrada == "esc") {
// code here
} else {
alert("opcion incorrecta");
}
}

function calcularIMC(peso, altura, genero) {
let imc = peso / (altura * altura);
let estado = "";
let resultado
if (genero === "h") {
if (imc < 18.5) {
estado = "Bajo peso";
} else if (imc >= 18.5 && imc <= 24.9) {
estado = "Peso saludable";
} else if (imc > 24.9 && imc <= 29.9) {
estado = "Sobrepeso";
} else if (imc > 29.9) {
estado = "Obesidad";
}
} else if (genero === "m") {
if (imc < 18.5) {
estado = "Bajo peso";
} else if (imc >= 18.5 && imc <= 24.9) {
estado = "Peso saludable";
} else if (imc > 24.9 && imc <= 29.9) {
estado = "Sobrepeso";
} else if (imc > 29.9) {
estado = "Obesidad";
}
}


resultado = "IMC: " + imc.toFixed(2) + ", Estado: " + estado

return  alert( resultado)

}

 




function calcular_Metabolismo_Basal(edad, peso, altura, genero) {
    let metabolismo_Basal;
    let resultado
    let altura_Basal = altura * 100
    if (genero === "h") {
      metabolismo_Basal = (10 * peso) + (6.25 * altura_Basal ) - (5 * edad) + 5;
    } else if (genero === "m") {
      metabolismo_Basal = (10 * peso) + (6.25 * altura_Basal ) - (5 * edad) - 161;
    }
    resultado= "TMB: " + metabolismo_Basal.toFixed(0)
    return alert (resultado);

  }
  
  