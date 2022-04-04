let ps = document.querySelectorAll('p')
let elementos = document.querySelectorAll('.titulo')
let pdiv = document.querySelectorAll('div > p')
document.write(ps[0].innerHTML)
document.write('<br>')
for (let i = 0; i < elementos.length; i++) {
    document.write(elementos[i].innerHTML + '<br>')
}

for (let i = 0; i < pdiv.length; i++) {
    pdiv[i].style.color = 'green'
}