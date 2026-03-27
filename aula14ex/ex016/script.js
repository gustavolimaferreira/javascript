function contar() {
    let c = 0
    var inicio = document.getElementById('numini').value
    var fim = document.getElementById('numfim').value
    var passo = document.getElementById('numpasso').value
    var res = document.getElementById('res')
    
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        for (c = Number(inicio); c <= Number(fim); c += Number(passo)) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}