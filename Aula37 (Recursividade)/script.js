function contador(min,max) {
    document.write(min + '<br>')
    if (min < max) {
        contador(++min,max)
    }
}

function fatorial(n) {
    if(n === 1) {
        return 1;
    }
    return n*fatorial(n-1)
    
}

let obj = document.getElementById('quad');
let ang = 0;
let anima;
function gira() {
    obj.style.transform = "rotate("+ang+"deg)"
    ang++
    if(ang > 360) {
        ang = 0
    }
    anima = requestAnimationFrame(gira)
}

gira()
//contador(0,10)
//document.write(fatorial(3))