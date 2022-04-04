let arr = []

let mochila = [
    ['Corda',1],
    ['Cura',5],
    ['Lanterna',1],
    ['Pilha',20]
]

for(let i = 0; i < mochila.length; i++) {
    for(let j = 0; j < mochila[i].length; j++) {
        document.write(mochila[i][j] + ' ')
    }
    document.write('<br>')
}














/*
for(let i = 0; i < 4; i++) {
    arr.push(prompt('Digite um número'))
}

for(let i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>')
}
*/