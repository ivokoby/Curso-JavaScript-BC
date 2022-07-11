

const mensaje = val => {
    throw new Error ("mensaje personalizado de Errrorrrrrr")
}

try {
    console.log ("anda bien")
} catch {
    console.log ("falla algo")
} finally {
    console.log ("se ejecuta igual")
}