let mochila = new Array();

let item1 = ['Corda',2],
    item2 = ['Faca',1],    
    item3 = ['Cura',5],    
    item4 = ['Prego',35];
    
mochila.push(item1)    
mochila.push(item2)    
mochila.push(item3)    
mochila.push(item4)

for(let chave1 in mochila) {
    for (let chave2 in mochila[chave1]) {
        document.write(mochila[chave1][chave2] + '<br>')
    }
}