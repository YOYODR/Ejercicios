// 5) Programa una funcion que invierta las palabras de una cadena de texto, pe. miFuncion ("Hola Mundo") devolverá "odnuM aloH"

const revertir = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste ninguna cadena")
    : console.log(cadena.split("").reverse().join(""));

revertir("Yoiner");
revertir();
revertir("Yoiner Duran");
revertir("Hola Mundo");

//6) Programa una funcion para contar el número de veces que sse repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolvera 2

const vecesPalabra = (cadena = "", palabra = "") => {
  if (!cadena) return console.warn("No ingresaste ninguna cadena");
  if (!palabra) return console.warn("No ingresaste la palabra a buscar");

  console.info(
    `En la cadena "${cadena}", la palabra "${palabra}" aparece ${
      cadena.match(new RegExp("w*" + palabra, "ig")).length
    } veces.`
  );
};

vecesPalabra("hola mundo adios mundo", "mundo");

//7) Programa una funcion que valide si una palabra o frase dada es un palindromo (que se lee igual en un sentido que en otro), pe. miFUncion ("Salas") devolvera true

const palindromo = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste una cadena")
    : cadena === cadena.split("").reverse().join("")
    ? console.info(`La palabra "${cadena}" es un palindromo.`)
    : console.info(`La palabra "${cadena}" no es un palindromo.`);

palindromo("oso");
palindromo("");
palindromo("yoiner");

//8) Programa una funcion que elimine cierto patron de caracteres de un texto dado, pe. miFuncion ("xyz1,xyz2,xyz3,xyz4 y xyz5","xyz") devolvera "1,2,3,4 y 5"

const eliminarPatron = (cadena = "", patron = "") => {
  let a = new RegExp(patron, "ig");
  if (!cadena) return console.warn("No ingresaste un texto");
  if (!patron) return console.warn("No ingresaste el patron a buscar");
  let b =
    a.test(cadena) === true
      ? console.log(
          `El texto "${cadena}" sin el patron "${patron}", quedaria "${cadena.replace(
            new RegExp(patron, "ig"),
            ""
          )}".`
        )
      : console.info(`En el texto "${cadena}" no esta la palabra "${patron}".`);
};
eliminarPatron("xyz1,xyz2,xyz3,xyz4 y xyz5", "xyz");
eliminarPatron("xyz1,xyz2,xyz3,xyz4 y xyz5");
eliminarPatron("", "xyz");

//version 2:

const eliminarPatron2 = (cadena = "", patron = "") =>
  !cadena
    ? console.warn("No ingresaste un texto")
    : !patron
    ? console.warn("No ingresaste el patron a buscar")
    : console.log(cadena.split(patron).join(""));

eliminarPatron("xyz1,xyz2,xyz3,xyz4 y xyz5", "xyz");
eliminarPatron("xyz1,xyz2,xyz3,xyz4 y xyz5");
eliminarPatron("", "xyz");
