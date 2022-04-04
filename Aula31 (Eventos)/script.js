function mudarCor(obj,cor) {
    obj.style.backgroundColor = cor
}

function mudaPos(obj) {
    obj.style.position = 'absolute'
    obj.style.left = Math.random()*500 + 'px'
    obj.style.top = Math.random()*500 + 'px'
}

function ola() {
    let data = new Date()
    let hora = data.getHours()
    let txt = ''
    if (hora < 12) {
        txt = 'Bom dia'
    } else if (hora < 18) {
        txt = 'Boa Tarde'
    } else {
        txt = 'Boa Noite'
    }
    alert(txt)
}