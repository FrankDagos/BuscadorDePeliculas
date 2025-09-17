const pelis = require("./pelis");

const comando = process.argv[2];

function main() {
  switch (comando) {
    case "--sort": {
      const propiedad = process.argv[3];
      if (!propiedad) {
        console.error(
          "Por favor indica la propiedad para ordenar. Ej: --sort title"
        );
        break;
      }
      const peliculasOrdenadas = pelis.ordenarPorPropiedad(propiedad);
      console.table(peliculasOrdenadas);
      break;
    }

    case "--search": {
      const titulo = process.argv[3];
      if (!titulo) {
        console.error(
          "Por favor indica el título a buscar. Ej: --search matrix"
        );
        break;
      }
      const peliculasEncontradas = pelis.buscarPorTitulo(titulo);
      console.table(peliculasEncontradas);
      break;
    }

    case "--tag": {
      const tag = process.argv[3];
      if (!tag) {
        console.error(
          "Por favor indica la etiqueta a filtrar. Ej: --tag action"
        );
        break;
      }
      const peliculasFiltradas = pelis.filtrarPorTag(tag);
      console.table(peliculasFiltradas);
      break;
    }

    case undefined: {
      console.table(pelis.leerPeliculas());
      break;
    }

    default: {
      console.log("Comando no reconocido. Usa --sort, --search o --tag.");
      break;
    }
  }
}

main();
