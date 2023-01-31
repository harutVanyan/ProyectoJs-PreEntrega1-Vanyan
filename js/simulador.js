
// Variables globales

let edad = 0;
let altura = 0;
let genero = "";
let peso = 0;


// Un "portero" que pide datos y filtra por edad y genero 

portero();

function portero() {
edad = Number(prompt("Ingrese su edad"));
if (edad >= 18) {
alert("Puede entrar");
altura = Number(prompt("Ingrese su altura en metro (Ej: 1.7)"));
peso = Number(prompt("Ingrese su peso en kilogramos (Ej: 75)"));
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

// Un menu para elegir entre las dos funcionalidades disponibles

function menu() {
let entrada = prompt("Elija su opcion, escriba 'esc' para terminar. \n1 - IMC(Indice de masa corporal)\n2 - TMB(Tasa metabolica basal)");
entrada = entrada.toLowerCase();
if (entrada == 1) {
calcularIMC(peso, altura);
} else if (entrada == 2) {
    calcular_Metabolismo_Basal(edad, peso, altura, genero)
} else if (entrada == "esc") {
// code here
} else {
alert("opcion incorrecta");
}
}

// La funcion que calcula el indice de masa corporal

function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);
  let estado = "";
  if (imc < 18.5) {
  estado = "Bajo peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
  estado = "Peso saludable";
  } else if (imc > 24.9 && imc <= 29.9) {
  estado = "Sobrepeso";
  } else if (imc > 29.9) {
  estado = "Obesidad";
  }
  let resultado = "IMC: " + imc.toFixed(2) + ", Estado: " + estado;
  return alert(resultado);
  }

 

// La funcion que calcula la tasa metabolica basal


function calcular_Metabolismo_Basal(edad, peso, altura, genero) {
    let metabolismo_Basal;
    let resultado
    let altura_Basal = altura * 100
    if (genero === "h") {
      metabolismo_Basal = (10 * peso) + (6.25 * altura_Basal ) - (5 * edad) + 5;
    } else if (genero === "m") {
      metabolismo_Basal = (10 * peso) + (6.25 * altura_Basal ) - (5 * edad) - 161;
    }
    resultado= "La cantidad minima aproximada de calorias que tu cuerpo necesita en reposo es: "  + metabolismo_Basal.toFixed(0) + "kcal"
    return alert (resultado);

  }
  
  