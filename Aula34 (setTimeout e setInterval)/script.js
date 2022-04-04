function mudaCor() {
    var obj = document.getElementById("dv1");
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    var rgb = `rgb(${r},${g},${b})`
    obj.style.backgroundColor = rgb
}

let tmp;
document.getElementById('bt1').addEventListener('click',iniciar)
document.getElementById('bt2').addEventListener('click',parar)


function iniciar() {
    tmp = setInterval(mudaCor,1000)
}

function parar() {
    clearInterval(tmp)
}



