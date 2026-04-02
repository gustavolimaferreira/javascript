let v = [];

function adicionar() {
    let numInput = document.getElementById('numInput');
    let num = Number(numInput.value);
    let tabSelect = document.getElementById('tabSelect');
    
    if (num < 1 || num > 100 || isNaN(num)) {
        alert('Por favor, insira um número entre 1 e 100.');
    } else if (v.includes(num)) {
        alert('Esse número já foi adicionado!');
    } else {
        v.push(num);

        let item = document.createElement('option');
        item.text = `Número ${num} adicionado.`;
        item.value = `num${num}`;
        tabSelect.appendChild(item);
    }

    numInput.value = '';
    numInput.focus();
}

function finalizar() {
    let res = document.getElementById('res');

    if (v.length == 0) {
        alert('Adicione valores antes de finalizar!');
        return;
    }

    let total = v.length;
    let maior = Math.max(...v);
    let menor = Math.min(...v);

    let soma = 0;
    for (let i in v) {
        soma += v[i];
    }

    let media = soma / total;

    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}.</p>`;
}
