let f1 = document.forms[0];
let el = f1.elements
el[2].style.backgroundColor = 'green'


for (let i = 0; el.length -1; i++) {
    el[i].style.backgroundColor = 'red'
}