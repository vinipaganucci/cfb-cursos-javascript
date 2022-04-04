let px = 0;
let py = 0;

document.addEventListener('keydown',function(event){
    let obj = document.getElementById('dv1')
    let tecla = KeyboardEvent;
    //37-Esquerda  -  38-Cima  -  39-Direita  -  40-Baixo

    if(tecla === 37) {
        px -= 10
        obj.style.left = px + 'px'
    } else if(tecla === 38) {
        py -= 10
        obj.style.top = py + 'px'
    } else if(tecla === 39) {
        px += 10
        obj.style.left = px + 'px'
    } else if(tecla === 40) {
        py += 10
        obj.style.top = py + 'px'
    }
});