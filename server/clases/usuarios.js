
class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala }
        this.personas.push(persona);
        return this.personas;
    }

    getPersonaById(id) {
        let persona = this.personas.filter( personaActual => personaActual.id === id )[0];
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasByRoom(sala) {
        let personasEnSala = this.personas.filter(personaActual => personaActual.sala === sala);
        return personasEnSala;
    }

    removePersona(id) {
        let personaBorrada = this.getPersonaById(id);
        this.personas = this.personas.filter( personaActual => /*retorna*/personaActual.id !== id);
        return personaBorrada;
    }

}

module.exports = {
    Usuarios
}