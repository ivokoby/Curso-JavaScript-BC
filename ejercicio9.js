

function devuelveTrue () {
    return true;
}

async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* generateId () {
    let id = 0;
    while (true) {
        yield id += 2
    }
}

