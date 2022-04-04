function msg() {
    alert('Cursos')
}

function cor1() {
    obj.style.backgroundColor = 'white'
}

function cor2() {
    obj.style.backgroundColor = 'red'
}

function pos() {
    obj.style.left = Math.random() * 500 + 'px'
    obj.style.top = Math.random() * 500 + 'px'
}

let obj = document.getElementById('dv1')
obj.addEventListener('click',msg)
obj.addEventListener('mouseover',pos)
obj.addEventListener('mouseout',cor2)