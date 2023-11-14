let listaAmigos = [];
let sorteioDarPresente = [];
let sorteioRecebePresente = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo');
    console.log(nome.value);

    if (nome.value.length == 0) {
        window.alert('Informe um nome.')
    } else if (listaAmigos.indexOf(nome.value) != -1 ) {
        window.alert('Nome já adicionado. Insira outro nome.');
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

function gerarNumeroAleatorioDar() {
    let numeroSorteado = parseInt(Math.random() * listaAmigos.length);

    //verificando se o número ja está na lista ou não
    if (sorteioDarPresente.includes(numeroSorteado)) {
        gerarNumeroAleatorioDar();
    } else {
        sorteioDarPresente.push(numeroSorteado);
        console.log(sorteioDarPresente);
    }
}

function gerarNumeroAleatorioReceber(index) {
    let numeroSorteado = parseInt(Math.random() * listaAmigos.length);

    //verificando se o número ja está na lista ou não
    if (sorteioRecebePresente.includes(numeroSorteado) || sorteioDarPresente[index] == numeroSorteado) {
        gerarNumeroAleatorioReceber();
    } else {
        sorteioRecebePresente.push(numeroSorteado);
        console.log(sorteioRecebePresente);
    }
}

function sortear() {
    if (listaAmigos.length <= 1) {
        window.alert('Informe pelo menos 2 nomes.');
    } else {
        console.log('sorteio');
        /*console.log('numero de amigos: ' + listaAmigos.length);
        console.log('sorteioDarPresente.length: ' + sorteioDarPresente.length);
        console.log('sorteioDarPresente.includes(sorteioDarPresente[i]): ' + sorteioDarPresente.includes(sorteioDarPresente[0]));
        console.log('primeiro amigo: ' + listaAmigos[0]);*/
        //sorteio não está funcionando ainda, precisa continuar
        for (let i = 0; i < listaAmigos.length; i++) {
            gerarNumeroAleatorioDar();
            console.log(`sorteioDarPresente[${i}]: ` + sorteioDarPresente[i] + ' ' + listaAmigos[sorteioDarPresente[i]]);
            gerarNumeroAleatorioReceber(i);
            console.log(`sorteioRecebePresente[${i}]: ` + sorteioRecebePresente[i] + ' ' + listaAmigos[sorteioRecebePresente[i]]);

        }
    }
}

function reiniciar() {

}
