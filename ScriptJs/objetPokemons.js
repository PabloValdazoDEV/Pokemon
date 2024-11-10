

class Pokemon{
    constructor(id, nombre, tipo, genero, vida, imagen, Ataques){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.genero = genero; 
        this.vida = vida;
        this.vidaTotal = vida;
        this.imagen = imagen;
        this.Ataques = Ataques
    }
}

class Ataques{
    constructor(id, nombre, dano, tipo, pp ) {
        this.id = id;
        this.nombre = nombre;
        this.dano = dano;
        this.tipo = tipo;
        this.pp = pp 
        this.ppTotal = pp

    }
}
class Entrenador{
    constructor(posicion, nombre, pokemons) {
        this.posicion = posicion;
        this.nombre = nombre;
        this.pokemos = pokemons
    }
}

const AtaquesRayo = [
    new Ataques(1, "Primer ataque", 49, "NORMAL", 3), 
    new Ataques(2, "Segundo ataque", 70, "ELECTRICO", 20), 
    new Ataques(3, "Tercero ataque", 0, "ELECTRICO", 30), 
    new Ataques(4, "Cuadrado ataque", 100, "NORMAL", 40)]

const pikachu = new Pokemon(1, "Pikachu", "ELECTRICO", "Macho", 100, null, AtaquesRayo)


const mew = new Pokemon(2, "Mew", "NORMAL", "Hembra", 100, null, [
    new Ataques(1, "Primer ataque 1", 20, "ELECTRICO", 4), 
    new Ataques(2, "Segundo ataque 2", 10, "NORMAL", 20), 
    new Ataques(3, "Tercero ataque 3", 100, "NORMAL", 30), 
    new Ataques(4, "Cuadrado ataque 4", 100, "ELECTRICO", 40)])

const Natalia = new Entrenador(1, "Natalia", [pikachu, mew])
const Pablo = new Entrenador(2, "Pablo", [mew, pikachu])
