function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        if(passo.value <= 0) {
            window.alert('Passo inválido, considerando PASSO 1')
            passo.value = 1
        } 
        res.innerHTML = 'Contando: <br>'
        if (Number(inicio.value) < Number(fim.value)) {
            for(let num = Number(inicio.value); num <= Number(fim.value); num += Number(passo.value)) {
            res.innerHTML += `${num}, `
            }
            res.innerHTML += '\u{1F3C1}' 
        } else {
            for(let num = Number(inicio.value); num >= Number(fim.value); num -= Number(passo.value)) {
                res.innerHTML += `${num}, `
            }
            res.innerHTML += '\u{1F3C1}'
        }
    }
} 