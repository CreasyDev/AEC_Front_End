
// Exercice 10
// Faire l’algorithme qui permet de calculer la facture d’un client.

var date;
var chemise;
var pantalon;
var casquette;

date = Date (prompt('La date d\'aujourd\'hui est le'));
chemise = Number (prompt('Le montant de cet article est'));
pantalon = Number (prompt('Le montant de cet article est'));
casquette = Number (prompt('Le montant de cet article est'));

pht = chemise + pantalon + casquette;
tps = pht * 5/100;
tvq = pht * 9.975/100;
ttc = tps + tvq;
pttc = pht + ttc;

console.log('Votre facture hors taxes revient à ' + pht + ' $');
console.log('Le total des taxes s\'élève à ' + ttc + ' $');
console.log('Votre facture en date du ', date, ' revient à ' + pttc + ' $');





