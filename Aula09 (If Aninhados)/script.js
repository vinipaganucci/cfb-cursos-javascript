let nota = 100;
var res;


if (nota >= 60) {
    if (nota >= 95) {
        res = 'Aprovado com louvor'
        if (nota === 100) {
            res = 'APROVADISSIMO'
        }  } else {
        res = 'Aprovado'
    }
    
}  else if (nota >= 40 && nota < 60) {
    res = 'Recuperação'
} else {
    if (nota >= 20) {
        res = 'Reprovado por nota baixa'
    } else {
        res = 'Reprovado com louvor'
    }
    
} 


document.write(res)
