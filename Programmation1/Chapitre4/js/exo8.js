
/* Lire les noms et notes d’examen d’une classe de 5 élèves.
Afficher ceux (noms et notes) qui ont une note supérieure à la moyenne. */

/* Calculez la moyenne (la somme des notes). Avec la seconde boucle trouvez ceux qui sont
inférieurs à la moyenne  */


// var Prenom = Array();
// var note = Array() / 5;
//
// for (var i = 0; i < 5; i++) {
//     Prenom[i] = prompt('Veuillez entrer un prénom ', '');
//     note[i] = Number (prompt ('Entrez une note ', ''));
// }
//
// if (note > 60) {
//     Prenom++;
// }
// else if (note < 60) {
//     Prenom++;
// }
// document.write (Prenom + '<br>' + note + '%');

/* ---------------------------------------------------------------- */

var noteMoyenne;
var tabNoms = [];
var tabNotes = [];

for(var i = 0; i < 5; i++){
    tabNoms[i] = prompt("Quel est votre nom?");
    tabNotes[i] = Number(prompt("Quelle note avez-vous obtenu?"));
}
//On pourrait calculer la moyenne dans la boucle du haut aussi et //ne faire que la division en sortant de la boucle
noteMoyenne = (tabNotes[0] + tabNotes[1] + tabNotes[2] + tabNotes[3] + tabNotes[4]) / 5;

for(i = 0; i < 5; i++) {
    if (tabNotes[i] > noteMoyenne){
        document.write(tabNoms[i] + ' ' + tabNotes[i] + '% ');
    }
}







