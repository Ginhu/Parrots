let cartas = 1;


while(cartas%2 != 0 || isNaN(cartas) == true ) {
    cartas = prompt('Informe com quantas cartas quer jogar!');

    if (cartas < 4 || cartas > 14 || isNaN(cartas) == true || cartas%2 != 0) {
        alert('O valor informado é não inválido: as cartas podem ir de 4 a 14! Por favor tente novamente.');
    } 

}
