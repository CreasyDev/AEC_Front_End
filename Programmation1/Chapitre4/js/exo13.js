
/* Lire 12 nombres quelconques et les mettre dans un tableau.
Vérifier si le dernier nombre (12e) additionné avec un des 11 autres nombres font une somme de 15.
Si tel est le cas, afficher ces 2 nombres. */

// var nb = [];
//
// for (var i = 0; i < 12; i++) {
//     nb[i] = Number (prompt ('Veuillez entrer un nombre'));
// }
// document.write (nb + '<br>');
//
// if (nb[2] + nb[11] === 15) {
//     document.write('Le premier nombre est '+ nb[2] + '<br>');
//     document.write('Le dernier nombre est ' + nb[11]);
// }
// else {
//     document.write ('Le nombre entré n\'est pas le bon');
// }
// document.write('<br> premier + dernier = ' + (nb[2] + nb[11]));



/* CORRECTION */

var tabNombres = [];
var trouver = false;

for (var i = 0; i < 12; i++){
    tabNombres[i] = Math.floor(Math.random() * 10);
    console.log(tabNombres[i]);
}

for (var j = 0; j < tabNombres.length-1; j++){
    if((tabNombres[j] + tabNombres[11]) === 15){
        document.write("Le nombre à indice " + j + " = " + tabNombres[j] + " + le nombre " + tabNombres[11] +" = 15<br>");
        trouver = true;
    }
}

if (!trouver){
    document.write("Aucune solution!");
}








