var num = 10


//o let não pode ser usado fora do if se for declarado dentro do escopo dele
document.write(num + '<br>')
if (num === 10) {
    let num = 5
    document.write(num + '<br>')
}

document.write(num)