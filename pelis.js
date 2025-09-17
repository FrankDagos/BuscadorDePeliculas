const fs = require("fs");

function leerPeliculas() {
  const data = fs.readFileSync(__dirname + "/pelis.json", "utf-8");
  return JSON.parse(data);
}

function ordenarPorPropiedad(propiedad) {
  peliculas = leerPeliculas();
  // usar la propiedad pasada como argumento; si no se pasa, devolver las películas sin ordenar
  if (!propiedad) return peliculas;
  peliculas.sort((a, b) => {
    const valA = a[propiedad];
    const valB = b[propiedad];
    const propA = typeof valA === "string" ? valA.toUpperCase() : String(valA); // Ignorar mayúsculas y minúsculas
    const propB = typeof valB === "string" ? valB.toUpperCase() : String(valB); // Ignorar mayúsculas y minúsculas
    if (propA < propB) {
      return -1;
    }
    if (propA > propB) {
      return 1;
    }
    return 0; // Son iguales
  });
  return peliculas;
}

function buscarPorTitulo(titulo) {
  peliculas = leerPeliculas();
  if (!titulo) return [];
  const resultado = peliculas.filter((pelicula) =>
    pelicula.title.toUpperCase().includes(titulo.toUpperCase())
  );
  return resultado;
}

function filtrarPorTag(tag) {
  peliculas = leerPeliculas();
  if (!tag) return [];
  const resultado = peliculas.filter((pelicula) => pelicula.tags.includes(tag));
  return resultado;
}

module.exports = {
  leerPeliculas,
  ordenarPorPropiedad,
  buscarPorTitulo,
  filtrarPorTag,
};
