
// 10. Lire un nombre entier au clavier et afficher le nom du mois correspondant.
// Si le nombre saisi ne correspond pas à un mois,
// affichez le message suivant : « Mois invalide ».

var Mois;

Mois = Number (prompt('Entrez un nombre'));

if (Mois === 1) {
    console.log('Janvier');
}
else if (Mois === 2) {
    console.log('Février');
}
else if (Mois === 3) {
    console.log('Mars');
}
else if (Mois === 4) {
    console.log('Avril');
}
else if (Mois === 5) {
    console.log('Mai');
}
else if (Mois === 6) {
    console.log('Juin');
}
else if (Mois === 7) {
    console.log('Juillet');
}
else if (Mois === 8) {
    console.log('Août');
}
else if (Mois === 9) {
    console.log('Septembre');
}
else if (Mois === 10) {
    console.log('Octobre');
}
else if (Mois === 11) {
    console.log('Novembre');
}
else if (Mois === 12) {
    console.log('Décembre');
}
else {
    console.log('Mois invalide')
}