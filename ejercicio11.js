
class Estudiante {
    constructor (nombre, asignaturas){
        this.nombre = nombre,
        this.asignaturas = asignaturas;
    }
}

const nuevoEstudiante = new Estudiante ("Ivan", "Javascript, HTML, CSS")
const nuevoEstudiante2 = new Estudiante ("Car", "Javascript")

const obtenDatos = [nuevoEstudiante, nuevoEstudiante2];

console.log(obtenDatos)