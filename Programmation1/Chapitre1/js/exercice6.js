
// Exercice 6
// Faites un programme qui lit le nom d’un article et son prix de détail.
// Votre programme doit afficher le prix de gros (66% du prix de détail)
// ainsi que le profit attendu.

var article = "moto";
var prix_d;
var prix_g;
var profit;

prix_d = Number(prompt('Quel est le prix de détail ?'));

prix_g = prix_d * 66 / 100;

console.log('Le prix de gros est: ' + prix_g + ' dollars');

profit = prix_d - prix_g;

console.log("Le profit est: " + profit + " dollars");