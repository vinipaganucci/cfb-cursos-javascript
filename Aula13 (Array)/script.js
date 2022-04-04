/*
let cores = ['vermelho','azul','verde','amarelo'];

document.write(cores + '<br>');
cores.push('roxo');
document.write(cores);
cores.push('roxo');
*/


let mochila = []

mochila.push('Faca')
mochila.push('Pedra')
mochila.push('Corda')
mochila.push('Pederneira')
mochila.push('Chave')
mochila.push('Lanterna')

mochila.splice(3,1)

for(let i = 0; i < mochila.length; i++) {
    document.write(mochila[i] + '<br>')
}