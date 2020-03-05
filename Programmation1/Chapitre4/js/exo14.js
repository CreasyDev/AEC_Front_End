
/* Lire 12 nombres quelconques et vérifier si deux de ces nombres font une somme de 15.
 Si tel est le cas, affichez ces deux nombres. */


// var nb = [];
//
// for (var i = 0; i < 12; i++) {
//     nb[i] = Number (prompt('Entrez votre nombre'));
// }
// document.write (nb[i] + '<br>');
//
// if(nb[3] + nb[9] === 15) {
//     document.write ('Le premier nombre est ' + nb[3] + '<br>');
//     document.write ('Le deuxième nombre est ' + nb[9] + '<br>');
// }
// else {
//     document.write ('Le nombre entré est invalide');
// }
//
// document.write('<br> premier + dernier = ' + (nb[3] + nb[9]));



/* CORRECTION */

var tabNombres = [];
var trouver = false;

for(var i = 0; i < 12; i++){
    tabNombres[i] = Math.floor(Math.random() * 10);
    console.log(tabNombres[i]);
}

for(var j = 0; j < tabNombres.length; j++){

    for(var k = 0; k < tabNombres.length; k++){

        if((tabNombres[j] + tabNombres[k]) === 15){
            document.write('Le nombre à indice ' + j + ' = ' + tabNombres[j] + ' + le nombre à l\'indice ' + k + ' = ' + tabNombres[k] + ' = 15<br>');
            trouver = true;
        }
    }
}

if(!trouver){
    document.write("Aucune solution!");
}




