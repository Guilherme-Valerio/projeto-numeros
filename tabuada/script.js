function multiplicar() {
    var numInput = document.getElementById('txtmulti')
    var res = document.querySelector('div#res')
    var tab = document.getElementById('seltab')
    
    if (numInput.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
        var num = Number(numInput.value)
        tab.innerHTML = ''

        for (let multi = 1; multi <= 10; multi += 1){
            let valor = document.createElement('option')
            valor.text = `${num} X ${multi} = ${num * multi}`
            valor.value = `tab${multi}`
            tab.appendChild(valor)
        }
    }
    
} 