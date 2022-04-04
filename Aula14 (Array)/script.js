let mochila = []
let mochila1 = [];
let mochila2 = []

mochila1.push('Faca')
mochila1.push('Pedra')
mochila1.push('Corda')
mochila1.push('Pederneira')
mochila1.push('Chave')
mochila1.push('Lanterna')

mochila2.push('Canivete')
mochila2.push('Arma')
mochila2.push('Remédio')
mochila2.push('Isqueiro')
mochila2.push('Graveto')
mochila2.push('Parafuso')
mochila2.push('Mouse')


mochila = mochila1.concat(mochila2)
console.log(mochila)



for(let i = 0; i < mochila1.length; i++) {
    document.write(`${mochila1[i]} <br> `)
}

for(let chave in mochila) {
    document.write('<br>' + mochila[chave])
}

/*
let numeros = [5,6,8,4,3,7,9,1]
let numeros2;
numeros.sort()
numeros.reverse()

numeros2 = numeros.join()
console.log(numeros2)

for(let chave in numeros) {
    document.write(`${numeros[chave]} <br>`)
}
*/