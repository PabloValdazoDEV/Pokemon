const API_URL = "https://pokeapi.co/api/v2/";
let Pablo;
let Adversario;

const tipoTraduccion = {
  normal: "normal",
  fire: "fuego",
  water: "agua",
  electric: "eléctrico",
  grass: "planta",
  ice: "hielo",
  fighting: "lucha",
  poison: "veneno",
  ground: "tierra",
  flying: "volador",
  psychic: "psíquico",
  bug: "bicho",
  rock: "roca",
  ghost: "fantasma",
  dragon: "dragón",
  dark: "siniestro",
  steel: "acero",
  fairy: "hada",
};

function calcularEstadisticasNivel100(baseStat) {
  const IV = 31;
  const EV = 252;
  return Math.floor(2 * baseStat + IV + Math.floor(EV / 4) + 5);
}

function calcularHPNivel100(baseHP) {
  const IV = 31;
  const EV = 252;
  return Math.floor(2 * baseHP + IV + Math.floor(EV / 4) + 110);
}

async function cargarAtaques() {
  try {
    const response = await fetch("./ScriptJs/ataques.json");
    if (!response.ok) throw new Error("Error al cargar ataques.json");
    const ataques = await response.json();
    return ataques;
  } catch (error) {
    console.error("Error cargando ataques:", error);
    return [];
  }
}

async function obtenerPokemonAleatorioKanto() {
  const idAleatorio = Math.floor(Math.random() * 151) + 1;
  const response = await fetch(`${API_URL}pokemon/${idAleatorio}`);
  const data = await response.json();

  const ataques = await obtenerAtaques(data.types);

  const hp = calcularHPNivel100(
    data.stats.find((stat) => stat.stat.name === "hp").base_stat
  );

  const pokemon = new PokemonNew(
    data.id,
    data.name,
    data.types.map((typeInfo) => typeInfo.type.name),
    Math.random() < 0.5 ? "M" : "F",
    hp,
    {
      front: data.sprites.front_default,
      back: data.sprites.back_default,
    },
    ataques
  );

  return pokemon;
}

async function obtenerAtaques(tiposPokemon) {
  const todosAtaques = await cargarAtaques();
  const ataques = [];

  const tipos = tiposPokemon.map(
    (tipoInfo) => tipoTraduccion[tipoInfo.type.name]
  );

  let ataquesDelTipo = todosAtaques.filter((ataque) =>
    tipos.includes(ataque.tipo)
  );

  while (ataques.length < 4 && ataquesDelTipo.length > 0) {
    const indiceAleatorio = Math.floor(Math.random() * ataquesDelTipo.length);
    const ataqueSeleccionado = ataquesDelTipo[indiceAleatorio];

    if (
      !ataques.some((ataque) => ataque.nombre === ataqueSeleccionado.nombre)
    ) {
      ataqueSeleccionado.ppTotal = ataqueSeleccionado.pp;
      ataques.push(ataqueSeleccionado);
      ataquesDelTipo.splice(indiceAleatorio, 1);
    }
  }

  while (ataques.length < 4) {
    const indiceAleatorio = Math.floor(Math.random() * todosAtaques.length);
    const ataqueAleatorio = todosAtaques[indiceAleatorio];

    if (!ataques.some((ataque) => ataque.nombre === ataqueAleatorio.nombre)) {
      ataqueAleatorio.ppTotal = ataqueAleatorio.pp;
      ataques.push(ataqueAleatorio);
    }
  }

  return ataques;
}

async function generarEquipoDePokemonKanto() {
  const equipo = [];
  while (equipo.length < 6) {
    const pokemon = await obtenerPokemonAleatorioKanto();
    equipo.push(pokemon);
  }
  return equipo;
}

async function crearEntrenador(nombre, posicion) {
  const equipoPokemon = await generarEquipoDePokemonKanto();
  return new Entrenador(posicion, nombre, equipoPokemon);
}

async function crearEnemigo(nombre, posicion) {
  const equipoPokemon = await generarEquipoDePokemonKanto();
  return new Entrenador(posicion, nombre, equipoPokemon);
}

(async () => {
  Pablo = await crearEntrenador("Pablo", 1);
  Adversario = await crearEnemigo("DANA", 2);
  pokemonActual = Pablo.pokemons[0];
  pokemonEnemigo = Adversario.pokemons[0];
  actualizarInterfazPokemon();
})();
