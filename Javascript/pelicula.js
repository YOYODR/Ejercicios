class Pelicula {
  constructor(info) {
    //Arreglo con las propiedades
    const propiedades = [
      "id",
      "titulo",
      "director",
      "anio",
      "pais",
      "genero",
      "calificacion",
    ];
    for (let i of propiedades) {
      if (info.hasOwnProperty(i) === false)
        return console.warn(`La propiedad ${i} es obligatoria`);
    }
    //Validacion id
    //Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
    if (info.hasOwnProperty("id") === false)
      return console.warn("La propiedad ID es obligatoria");
    if (typeof info.id !== "string")
      return console.warn(
        `EL valor ${info.id} ingresado, no es una cadena de texto`
      );
    if (info.id === "") return console.warn("El ID no puede estar vacio");
    if (info.id.length !== 9)
      return console.warn("El ID debe de tener 9 caracteres");
    let ida = [];
    for (let i of info.id) {
      ida.push(i);
    }
    for (let i = 0; i <= 8; i++) {
      if (i <= 1) {
        if (!/[A-Za-z]/.test(ida[i]))
          return console.warn(
            `El caracter ${ida[i + 1]} no es una letra valida`
          );

        if (i > 1 && i <= 8) {
          if (!/[0-9]/.test(ida[i]))
            return console.warn(`El caracter ${ida[i]} no es un numero`);
        }
      }
    }
    //Validacion Titulo
    //Valida que el título no rebase los 100 caracteres
    if (typeof info.titulo !== "string")
      return console.warn(
        `EL valor ${info.titulo} ingresado, no es una cadena de texto`
      );
    if (info.titulo === "") return console.warn("El Titulo es obligatorio");
    if (info.titulo.length > 100)
      return console.warn("El Titulo no debe sobrepasar los 100 caracteres");
    //Validacion Director
    //Valida que el director no rebase los 50 caracteres.
    if (typeof info.director !== "string")
      return console.warn(
        `EL valor ${info.director} ingresado, no es una cadena de texto`
      );
    if (info.director === "")
      return console.warn("El nombre del Director es obligatorio");
    if (info.director.length > 50)
      return console.warn(
        "El nombre del director no debe sobrepasar los 50 caracteres"
      );
    if (!/^[a-zA-Z']+\s[a-zA-Z']+$/.test(info.director))
      return console.warn(
        `El nombre del Director no es valido, debe ser nombre y apellido`
      );

    //Validacion anio
    // Valida que el año de estreno sea un número entero de 4 dígitos
    if (info.anio === undefined)
      return console.warn("No ingresaste ningun año");
    if (typeof info.anio !== "number")
      return console.warn(`El valor ${info.anio} ingresado, NO es un numero`);
    if (!Number.isInteger(info.anio))
      return console.warn("El año debe ser un numero entero");
    if (info.anio < 1984 || info.anio > 2023)
      return console.warn(
        "El año debe tener 4 digitos y ser mayor al año 1984, y menor o igual año actual"
      );

    //Validacion pais
    // Valida que el país o paises sea introducidos en forma de arreglo
    if (!(info.pais instanceof Array))
      return console.warn("El pais debe ser ingresado en un arreglo");
    for (let i of info.pais) {
      if (typeof i !== "string")
        return console.warn(
          `El valor ${i} ingresado, NO es una cadena de texto`
        );
      if (/[0-9]/g.test(i))
        return console.warn("El nombre no debe tener números");
    }

    //Validacion de genero
    //Valida que los géneros sean introducidos en forma de arreglo
    let gene = [
      "action",
      "adult",
      "adventure",
      "animation",
      "biography",
      "comedy",
      "crime",
      "documentary",
      "drama",
      "family",
      "fantasy",
      "film noir",
      "game-show",
      "history",
      "horror",
      "musical",
      "music",
      "mystery",
      "news",
      "reality-tv",
      "romance",
      "sci-fi",
      "short",
      "port",
      "talk-show",
      "thriller",
      "war",
      "western",
    ];

    if (!(info.genero instanceof Array))
      return console.warn("El genero debe ser ingresado como arreglo");
    for (let i of info.genero) {
      if (typeof i !== "string")
        return console.warn(
          `El valor ${i} ingresado, NO es una cadena de texto`
        );
      i = i.toLowerCase();
      if (gene.indexOf(i) === -1)
        return console.warn(`El genero "${i}" no esta en la lista de generos`);
    }

    //Validar calificacion
    //Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición

    if (typeof info.calificacion !== "number")
      return console.warn(
        `El valor ${info.calificacion} ingresado, NO es un numero`
      );
    if (info.calificacion < 0 || info.calificacion > 10)
      return console.warn(
        "La calificacion esta fuera del rango permitido [0-10]"
      );
    if (!Number.isInteger(info.calificacion)) {
      if (!/^[0-9]+([.][0-9]) ?$/.test(info.calificacion))
        return console.warn("La calificacion solo puede tener un decimal");
    }

    this.informacion = info;
  }

  //-Crea un método estático que devuelva los géneros aceptados.
  generos() {
    console.info([
      "action",
      "adult",
      "adventure",
      "animation",
      "biography",
      "comedy",
      "crime",
      "documentary",
      "drama",
      "family",
      "fantasy",
      "film noir",
      "game-show",
      "history",
      "horror",
      "musical",
      "music",
      "mystery",
      "news",
      "reality-tv",
      "romance",
      "sci-fi",
      "short",
      "port",
      "talk-show",
      "thriller",
      "war",
      "western",
    ]);
  }
  // - Crea un método que devuelva toda la ficha técnica de la película.
  fichaTecnica() {
    let ficha = Object.values(this.informacion);
    console.info(
      `Ficha tecnica de la pelicula:\nTitulo: ${ficha[1]}\nID IMDB: ${ficha[0]}\nDirector: ${ficha[2]}\nAño de lanzamiento: ${ficha[3]}\nPais o paises de origen: ${ficha[4]}\nGeneros: ${ficha[5]}\nCalificacion en IMDB: ${ficha[6]}\n`
    );
  }
}

// Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

const movies = (peli) => {
  if (!(peli instanceof Array))
    return console.warn("Las peliculas deben estar en un arreglo");
  for (let i = 0; i <= peli.length - 1; i++) {
    let pelicula = new Pelicula(peli[i]);
    pelicula.fichaTecnica();
  }
};

movies([
  {
    id: "qw2356678",
    titulo: "Transformers",
    director: "Breynner Alexander",
    anio: 2003,
    pais: ["Brasil", "Colombia"],
    genero: ["action", "news", "war"],
    calificacion: 8,
  },

  {
    id: "oi2675678",
    titulo: "Avatar",
    director: "yoiner duran",
    anio: 2015,
    pais: ["EE.UU", "Colombia"],
    genero: ["action", "news", "mystery", "Reality-tv"],
    calificacion: 8,
  },

  {
    id: "po2323678",
    titulo: "John Wick",
    director: "Daniel Rojas",
    anio: 2022,
    pais: ["Noruega", "Colombia"],
    genero: ["action", "romance", "sci-fi", "short"],
    calificacion: 10,
  },
]);

const yuri = new Pelicula({
  id: "po2353678",
  titulo: "Viajes",
  director: "Yoiner Duran",
  anio: 2022,
  pais: ["Corea", "Colombia", "Canada"],
  genero: ["romance"],
  calificacion: 10,
});

yuri.generos();
yuri.fichaTecnica();
