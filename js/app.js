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

function sortear() {
    if (listaAmigos.length <= 1) {
        window.alert('Informe pelo menos 2 nomes.');
    } else {
        console.log('sorteio');
        let validacao = 1;
        /*for (let i = 0; i <= listaAmigos.length; i++) {
            while (validacao == 1){
                sorteioDarPresente[i] = parseInt(Math.random() * listaAmigos.length);

            }
            let numeroSorteio = parseInt(Math.random() * listaAmigos.length);
            console.log(numeroSorteio);


        }*/
    }
}

function reiniciar() {

}
