// Constante con un array de objetos, que contiene las rutinas
const rutinas = [
  {
    id: 1,

    nivel: "inicial",

    rutinaUno: ["30m correr", "200 abdominales", "100 flexiones de brazos"],

    rutinaDos: ["30m correr", "200 sentadillas", "100 espinales"],
  },

  {
    id: 2,

    nivel: "intermedio",

    rutinaUno: ["60m correr", "300 abdominales", "200 flexiones de brazos"],

    rutinaDos: ["60m correr", "300 sentadillas", "200 espinales"],
  },

  {
    id: 3,

    nivel: "avanzado",

    rutinaUno: ["130m correr", "400 abdominales", "300 flexiones de brazos"],

    rutinaDos: ["130m correr", "400 sentadillas", "300 espinales"],
  },
];

// Inicializacion de variables globales
let edad = 0;
let altura = 0;
let genero = "";
let peso = 0;
let actividad = 0;
let nivel = "";

// Un "portero" que pide datos y asigna los valores ingresados a las variables globales.
// Luego llama a la funcion act() que asigna el nivel correspondiente en base a la cantidad de actividad que realiza.
// Finalmente llama a la funcion menu() para mostrar las opciones de la app

portero();
function portero() {
  edad = Number(prompt("Ingrese su edad"));
  if (edad >= 18) {
    alert("Puede entrar");
    altura = Number(prompt("Ingrese su altura en metro (Ej: 1.7)"));
    peso = Number(prompt("Ingrese su peso en kilogramos (Ej: 75)"));
    genero = prompt("Ingrese su genero \n'm' para mujer \n'h' para hombre");
    genero = genero.toLowerCase();
    while (genero !== "h" && genero !== "m") {
      alert("Genero incorrecto");
      genero = prompt("Ingrese su genero \n'm' para mujer \n'h' para hombre");
    }
    actividad = prompt("Cuantas veces por semana hace ejercicio");
    act(actividad);
    menu();
  } else {
    alert("No puede entrar");
  }
}

// Asigna el nivel correspondiente en base a la cantidad de actividad que realiza.
function act(actividad) {
  if (actividad >= 0 && actividad <= 2) {
    nivel = "inicial";
  } else if (actividad >= 3 && actividad <= 4) {
    nivel = "intermedio";
  } else if (actividad >= 5) {
    nivel = "avanzado";
  } else {
    nivel = "No se puede determinar el nivel";
  }
}

// Un menu para elegir entre las dos funcionalidades disponibles
function menu() {
  let entrada = prompt(
    "Elija su opcion, escriba 'esc' para terminar. \n1 - IMC(Indice de masa corporal)\n2 - TMB(Tasa metabolica basal) \n3- Rutinas"
  );
  entrada = entrada.toLowerCase();
  if (entrada == 1) {
    calcularIMC(peso, altura);
  } else if (entrada == 2) {
    calcular_Metabolismo_Basal(edad, peso, altura, genero);
  } else if (entrada == 3) {
    buscarRutina(rutinas, nivel);
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
  let resultado;
  let altura_Basal = altura * 100;
  if (genero === "h") {
    metabolismo_Basal = 10 * peso + 6.25 * altura_Basal - 5 * edad + 5;
  } else if (genero === "m") {
    metabolismo_Basal = 10 * peso + 6.25 * altura_Basal - 5 * edad - 161;
  }
  resultado =
    "La cantidad minima aproximada de calorias que tu cuerpo necesita en reposo es: " +
    metabolismo_Basal.toFixed(0) +
    "kcal";
  return alert(resultado);
}

// Buscador de rutina, recibe dos parametros el primero es un array de objetos y el segundo el nivel buscado.
// Inicializa la constante rutinasEncontradas y le asigna el resultado de realizar un filter sobre "rutinas" y retorna un nuevo array con las rutinas encontradas.
// Luego inicializa una variable "mensaje".
// Se realiza una comprobacion si el array devuelto tiene algo dentro con el metodo lenght, si no tiene nada, muestra un mensaje de "Rutinas no encontradas"
// Si el array tiene elementos, realiza un forEach y le agrega a la variable "mensaje" el contenido de las posiciones del array convertidas a string mediante el metodo join.
// Finalmente muestra el la variable "mensaje" por alert.
function buscarRutina(rutinas, nivelBuscado) {
  const rutinasEncontradas = rutinas.filter((rutina) => {
    return rutina.nivel === nivelBuscado;
  });

  let mensaje = "";
  if (rutinasEncontradas.length === 0) {
    mensaje =
      "No se encontró un nivel " + nivelBuscado + " en la lista de rutinas.";
  } else {
    rutinasEncontradas.forEach((rutina) => {
      mensaje +=
        "Su nivel es: " +
        nivel +
        "\nLas rutinas encontradas para su nivel son: \n";
      mensaje += "Rutina Uno: " + rutina.rutinaUno.join(", ") + "\n";
      mensaje += "Rutina Dos: " + rutina.rutinaDos.join(", ") + "\n\n";
    });
  }

  alert(mensaje);
}
