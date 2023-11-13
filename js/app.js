let listaAmigos = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo');
    console.log(nome.value);

    if (nome.value.length == 0) {
        window.alert('Informe um nome.')
    } else {
        listaAmigos.push(nome.value)
        console.log(listaAmigos);

        let amigosIncluidos = document.getElementById('lista-amigos');
        
        if (amigosIncluidos.textContent == '') {
            amigosIncluidos.textContent = nome.value;
        } else {
            amigosIncluidos.textContent += `, ${nome.value}`;
        }
        
        nome.value = '';
    }
    
}

