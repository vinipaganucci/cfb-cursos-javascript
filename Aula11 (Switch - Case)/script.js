let pos = 4;
let res;
 

switch (pos) {
    case 1:
        res = 'Primeiro lugar => '
        break
    case 2:
        res = 'Segundo lugar => '
        break
    case 3:
        res = 'Terceiro lugar => '
        break
    default:
        res = 'Não foi ao pódio'
            
}

switch (pos) {
    case 1:
    case 2:
    case 3:
        res += ' Subiu ao pódio'
}
document.write(res)