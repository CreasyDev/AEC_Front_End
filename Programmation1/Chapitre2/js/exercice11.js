// 11. Le prix de vente d’une voiture neuve est la somme du prix de base, d’un montant de frais et
// d'un montant de profit du concessionnaire et des montants taxes de ventes. Les frais sont
// de 2% du prix de base et le pourcentage du concessionnaire est de 12% du prix de base.
// et le premier montant de taxe de vente est de 5% du sous-total du prix de base, des frais
// et du profit du concessionnaire et le deuxième montant de taxe est de 9,975% du prix de base,
// des frais et du profit du concessionnaire. Écrire l’algorithme qui lit le prix de base et
// qui imprime le montant de frais, le montant de commission, les deux montants de taxes et le prix
// de vente total, le tout sur des lignes différentes avec des messages explicites.

var prixBase;

prixBase = Number (prompt('Entrez le prix de base'));

frais = prixBase * 2/100;
profit = prixBase * 12/100;
TPS = prixBase * 5/100;
TVQ = prixBase * 9.975/100;
prixVente = prixBase + frais + profit + TPS + TVQ;

console.log('Le montant des frais est de ' + frais + ' ');
console.log('Le profit est de ' + profit + ' ');
console.log('La TPS est de ' + TPS + ' ');
console.log('La TVQ est de ' + TVQ + ' ');
console.log('Le prix de vente est de ' + prixVente + ' ');