//1. Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const contarCar = (cadena = "") => {
  let numero = /\d/;

  while (numero.test(cadena) == true || typeof cadena == "objet" || !cadena) {
    alert("Escribe solo palabras");

    cadena = prompt("Dame una palabra");
  }

  console.log(`La palabra o frase tiene ${cadena.length} caracteres`);
};
let cadena = prompt("Dame una palabra sin números");
while (!cadena) {
  alert("No pudes dejar el espacio vacio");
  cadena = prompt("Dame una palabra");
}
contarCar(cadena);

//2. Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe.miFuncion("Hola Mundo", 4) devolverá "Hola".

const textoRecortado = (cadena, n) => {
  while (isNaN(n) === true) {
    alert("Escribiste una letra, escribe solo numeros");

    n = prompt("Escribe un número");
  }

  console.log(`Los caracteres resultantes son "${cadena.substring(0, n)}"`);
};
let cadena2 = prompt("Escribe una palabra");

let n = prompt("Escribe hasta que caracter vas a cortar");
textoRecortado(cadena, n);

//3. Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.miFuncion('hola que tal', ' ') devolverá['hola', 'que', 'tal'].

const separador = (cadena, separar) => {
  while (typeof cadena !== "string") {
    alert("Caracter invalido, escribe de nuevo la frase");
    cadena = prompt("Escribe una frase");
  }
  console.log(cadena.split(separar));
};

let cadena3 = prompt("Escribe una frase");

let separar = prompt(
  "Escribe un caracter que quieras separar las palabras, que esten en la frase"
);

separador(cadena3, separar);

//4. Programa una función que repita un texto X veces, pe.miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repetirTexto = (palabra, n4) => {
  while (isNaN(n4) === true) {
    alert("No es un numero");
    n4 = prompt("Escribe un numero, no letras");
  }
  console.log(palabra.repeat(" " + n4));
};

let palabra = prompt("Escribe una palabra") + " ";

let n4 = prompt("Cuantas veces quieres repetir la palabra");

repetirTexto(palabra, n4);
