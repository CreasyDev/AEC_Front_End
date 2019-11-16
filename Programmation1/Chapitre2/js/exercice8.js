
// 8. Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé.
// Affichez son salaire. (Attention, il est payé le double de son taux horaire pour toutes les heures
// supplémentaires travaillées. Une semaine de travail normale est de 40 heures.

var taux = 30;
var salaire = 30 * 40;
var Hsup1;


Hsup1 = Number (prompt('Combien d\'heures supplémentaires faites-vous ?'));

if (Hsup1 > 0) {
    console.log(Hsup1 * 2 * taux + salaire);
}
else {
    console.log(salaire);
}




