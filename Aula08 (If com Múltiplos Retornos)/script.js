let nota = 95;
var res;


if (nota >= 95) {
    res = 'Aprovado com louvor'
} else if (nota >= 60) {
    res = 'Aprovado'
} else if (nota >= 40 && nota < 60) {
    res = 'Recuperação'
} else if (nota >= 20) {
    res = 'Reprovado'
} else {
    res = 'Reprovado com louvor'
}


document.write(res)
