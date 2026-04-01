function gerar() {
    let num = document.getElementById('num')
    let  tab = document.getElementById('lista')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // Limpa a lista antes de gerar a nova tabuada
        while (c <= 10) {
            let item = document.createElement('option')
            item.text  = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
/*
function gerar() {
    var num = Number(document.getElementById('num').value)
    var res = document.getElementById('res')
    var tab = document.getElementById('lista')
    
    if (num == 0) {
        res.innerHTML = 'Por favor, digite um número!'    
    } else {       
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }        
    }
}
*/