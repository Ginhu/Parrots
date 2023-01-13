let cartas = 1, arrayJogo = [], div1, div2, contador=0, relogio=0,
gif = ["bobrossparrot.gif", 
       "explodyparrot.gif", 
       "fiestaparrot.gif", 
       "metalparrot.gif", 
       "revertitparrot.gif", 
       "tripletsparrot.gif", 
       "unicornparrot.gif"];




while(cartas%2 != 0 || isNaN(cartas) == true ) {
    cartas = prompt('Informe com quantas cartas quer jogar!');

    if (cartas < 4 || cartas > 14 || isNaN(cartas) == true || cartas%2 != 0) {
        alert('O valor informado é não inválido: as cartas podem ir de 4 a 14! Por favor tente novamente!');
    } else {

        setInterval(tempo, 1000);

        for (let i = 0; i<cartas/2; i++) {
        arrayJogo.push(gif[i]);
        arrayJogo.push(gif[i]);
        }

        arrayJogo.sort(comparador);

        const tabuleiro = document.querySelector('.tabuleiro');

        for (let i = 0; i< cartas; i++) {
        tabuleiro.innerHTML += `<div class="card" onclick="clicar(this)" data-test="card">
        <img class="background-parrot" src="./assets/files/back.png" alt="card background" data-test="face-down-image">
        <img class="front-parrot-gif invisivel" src="./assets/files/${arrayJogo[i]}" alt="card front" data-test="face-up-image">
        </div>`
        }

    }

}

function comparador() { 
	return Math.random() - 0.5; 
}

function tempo() {
    document.querySelector('.reloginho').innerHTML = relogio;
    relogio++;
}

function clicar(cartaClicada) {
    
    if(document.querySelectorAll('.clicado').length<1) {
    div1 = cartaClicada;
    div1.classList.add('clicado');
    div1.querySelector('.background-parrot').classList.add('invisivel');
    div1.querySelector('.front-parrot-gif').classList.remove('invisivel');
    div1.removeAttribute("onclick");
    contador++;
    }
    else if (document.querySelectorAll('.clicado').length<2){
    
    div2 = cartaClicada;
    div2.classList.add('clicado');
    div2.querySelector('.background-parrot').classList.add('invisivel');
    div2.querySelector('.front-parrot-gif').classList.remove('invisivel');
    div2.removeAttribute("onclick");
    contador++;


        if(div1.querySelector('.front-parrot-gif').src != div2.querySelector('.front-parrot-gif').src) {
            console.log('diferente');
            setTimeout(desvirar, 1000);
        } else {
            div1.removeAttribute("onclick");
            div2.removeAttribute("onclick");
            div1.classList.remove('clicado');
            div1.classList.add('acerto');
            div2.classList.remove('clicado');
            div2.classList.add('acerto');
            if (document.querySelectorAll('.acerto').length == cartas) {
                alert(`Você ganhou em ${contador} jogadas! A duração do jogo doi de ${relogio} segundos!`);
            }
        }
    } 
}

function desvirar() {

    while (document.querySelectorAll('.clicado').length > 0 ) {
    
    document.querySelector('.clicado .front-parrot-gif').classList.add('invisivel');
    document.querySelector('.clicado .background-parrot').classList.remove('invisivel');
    document.querySelector('.clicado').setAttribute("onclick", "clicar(this)");
    document.querySelector('.clicado').classList.remove('clicado');

    }
}
