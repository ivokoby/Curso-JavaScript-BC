var ivan = {
    nombre : "Ivo",
    apellido: "Koby",
    edad: 20,
    altura: 1.80,
    desarrollador: true,
}

var getEdad = ivan.edad;

var biagio = {
    nombre : "Biagio",
    apellido: "Facu",
    edad: 20,
    altura: 1.79,
    desarrollador: false,
}

var baik = {
    nombre : "Baik",
    apellido: "Seba",
    edad: 20,
    altura: 1.78,
    desarrollador: false,
}

var compas = [ivan, biagio, baik];

compas.sort((a, b) => a.altura-b.altura);

console.log(compas)