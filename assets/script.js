let cartas = 1;
let div1, div2;

/* while(cartas%2 != 0 || isNaN(cartas) == true ) {
    cartas = prompt('Informe com quantas cartas quer jogar!');

    if (cartas < 4 || cartas > 14 || isNaN(cartas) == true || cartas%2 != 0) {
        alert('O valor informado é não inválido: as cartas podem ir de 4 a 14! Por favor tente novamente.');
    } 

}
 */

function clicar(cartaClicada) {
    
    if(document.querySelectorAll('.clicado').length<1) {
    div1 = cartaClicada;
    div1.classList.add('clicado');
    div1.querySelector('.background-parrot').classList.add('invisivel');
    div1.querySelector('.front-parrot-gif').classList.remove('invisivel');
    div1.removeAttribute("onclick");
    console.log(div1.querySelector('.front-parrot-gif').src);
    /* console.log(cartaClicada.querySelector('.background-parrot').src); */
    }
    else if (document.querySelectorAll('.clicado').length<2){
    
    div2 = cartaClicada;
    div2.classList.add('clicado');
    div2.querySelector('.background-parrot').classList.add('invisivel');
    div2.querySelector('.front-parrot-gif').classList.remove('invisivel');
    div2.removeAttribute("onclick");
    console.log(div2.querySelector('.front-parrot-gif').src);

        if(div1.querySelector('.front-parrot-gif').src != div2.querySelector('.front-parrot-gif').src) {
            console.log('diferente');
            setTimeout(desvirar, 1000);
        } else {
            div1.removeAttribute("onclick");
            div2.removeAttribute("onclick");
            div1.classList.remove('clicado');
            div2.classList.remove('clicado');
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
