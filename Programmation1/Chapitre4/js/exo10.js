
/* Le collège offre 6 options aux étudiants. Ces options sont :

INFORMATIQUE
ADMINISTRATION
HISTOIRE
GÉNIE
GEOGRAPHIE
BUREAUTIQUE

Mettre ces options dans un tableau, puis demander à un étudiant d’entrer un nom d’option.
Vous lui répondez si OUI ou NON le collège offre cette option. */


var tabOptions = ['INFORMATIQUE', 'ADMINISTRATION', 'HISTOIRE', 'GÉNIE', 'GEOGRAPHE', 'BUREAUTIQUE'];
var choix;
var trouver = false;

choix = prompt ('Veuillez entrez une des options').toUpperCase();
for (var i = 0; i < 6; i++) {
    if (choix === tabOptions[i]) {
        trouver = true;
    }
}
if (trouver) {
    document.write ('OUI ! Nous offrons cette option de cours');
}
else {
    document.write ('NON ! Cette option de cours n\'est pas offerte');
}





/* ------------------------------------------------------------------------------------- */

// var options = ["INFORMATIQUE","WEB","RESEAUTIQUE","CSS"];
// var choix = prompt("Entrez une option pour valider si le cours est offert : ").toUpperCase();
// var trouver = false;
//
// for(var i = 0; i < options.length;i++){
//     if (choix === options[i]){
//         trouver = true;
//     }
// }
//
// if(trouver){
//     console.log("Le cours est offert");
// }
// else{
//     console.log("Le cours n'est pas offert");
// }
