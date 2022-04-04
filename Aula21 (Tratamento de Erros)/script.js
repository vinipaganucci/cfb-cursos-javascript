let num = 10

try {
    num = prompt('Digite um número')
    if (num > 10) {
        throw new Error('Valor máximo excedido')//message
    }
    document.write('Valor: ' + num)
} catch (e) {
    document.write('Erro: ' + e.message)
    console.log(e.message)
}finally {
    document.write('<br>Fim do programa')
}

