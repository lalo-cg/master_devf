

var animales = [
    {
        nombre: 'Vaca',
        comida: true
    },
    {
        nombre: 'Aguila',
        comida: false
    },
    {
        nombre: 'Ballena',
        comida: false
    },
    {
      nombre: 'Murcielago',
      comida: true,
    }
]


animales.forEach (animales => console.log (animales));


for (animal of animales) {
    console.log(animal)
}


for (var i=0; i<animales.length ; i++){
    console.log(animales[i])
}


