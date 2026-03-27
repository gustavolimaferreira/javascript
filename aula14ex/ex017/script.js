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