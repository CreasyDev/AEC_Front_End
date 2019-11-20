
// 13. Lire les quatre éléments d’information suivants :
// le nom de l’étudiant,
// la note de laboratoire, (compte pour 20%)
// la note de l’examen de mi-session  (compte pour 30%)
// la note de l’examen de fin de session. (compte pour 50%)
//
// Toutes les notes lues sont sur 100.
//
// Affiche le nom suivi des trois notes lues qui ont été ramenées sur le pourcentage demandé ci-dessus,
// et de la note finale. Le tout sur des lignes différentes accompagné de messages clairs.

var nom;
var Lab;
var miSession;
var finSession;
var noteFinale;

nom = (prompt('Entrez votre nom'));
Lab = Number (prompt('Quelle est la note de labo ?'));
miSession = Number (prompt('Quelle est la note de mi-session ?'));
finSession = Number (prompt('Quelle est la note de fin de session ?'));

rLab = Lab * 20/100;
rmiSession = miSession * 30/100;
rfinSession = finSession * 50/100;
noteFinale = rLab + rmiSession + rfinSession;

console.log(nom + ' a obtenu une note de laboratoire de ' + Lab + '%');
console.log(nom + ' a obtenu une note de mi-session de ' + miSession + '%');
console.log(nom + ' a obtenu une note de fin de session de ' + finSession + '%');
console.log(nom + ' a obtenu une note finale de ' + noteFinale + '%');