
// Exercice 5
// Lire le nom et l'âge d'un individu et convertir son âge en jours.

var nom = 'Jean';
var age;
var jours = 365;
var total;

age = Number(prompt('Quel est votre âge ?'));

total = age * jours;

console.log('Bonjour', nom, '! ' + 'Vous avez vécu ' + total + ' jours sur cette terre');