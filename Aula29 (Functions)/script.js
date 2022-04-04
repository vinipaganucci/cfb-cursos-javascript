
let numeros = [10,25,50,30]
function media(nums) {
    let tam = nums.length
    let soma = 0
    for (let i = 0; i < tam; i++) {
        soma += nums[i]
    }

    return  Math.round(soma/tam)
    
}

document.write(media(numeros))









/*
function escreve() {
    document.write('Curso')
}

escreve()
*/

/*
function soma (n1,n2) {
    document.write(n1 + n2)
}

soma(5,5)
*/


/*
function soma(n1,n2) {
    let res = n1 + n2
    return res
}

document.write(soma(5,5))
*/