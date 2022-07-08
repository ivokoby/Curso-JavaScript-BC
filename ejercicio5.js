var lista = ["pan", "queso", "jamon", "atun", "mayonesa", "leche"];

lista.push("Aceite de Girasol");

lista.pop()

const peliculas = [
    {
        titulo: "Shrek",
        director: "Director1",
        fecha: 2000
    },
    {
        titulo: "TopGun2",
        director: "Director2",
        fecha: 2022
    },
    {
        titulo: "Club de la pelea",
        director: "Director3",
        fecha: 2015
    }
]

var lista2 = peliculas.filter(obj => obj.fecha > 2010);


var lista3 = peliculas.map((valor) => {
    return valor.director
})

var lista4 = peliculas.map((valor) => {
    return valor.titulo
})

var lista5 = lista3.concat(lista4)

var lista6 = [...lista4, ...lista5]

