

// 12. Écrire un algorithme qui calcule la note finale d’un étudiant sur 100%. Cette note est dérivée
// des trois notes suivantes : note à l’examen de mi-session qui compte pour 30% de la note finale,
// note de l’examen de fin session qui compte pour 50% et la note de laboratoire qui compte pour 20%.

var total1 = 67 * 30 / 100;
var total2 = 76 * 50 / 100;
var total3 = 75 * 20 / 100;

noteFinale = total1 + total2 + total3;

console.log('La note finale de cet étudiant est ' + noteFinale + '');