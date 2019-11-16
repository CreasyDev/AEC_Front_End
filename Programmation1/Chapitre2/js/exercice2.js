
// 2.  Un marchand décide d’accorder une réduction de 15% à tout acheteur,
// si le montant total de ses achats est plus grand que 200.00$.
// Écrire un algorithme qui permet de calculer et d’afficher
// la réduction que chaque acheteur a droit,
// connaissant le montant total des achats.

var montant;
var reduction = 15 / 100;

montant = Number (prompt('Entrez le montant de vos achats'));

if (montant > 200) {
    console.log(montant - montant * reduction);
}
else {
    console.log(montant + 'sans la réduction');
}
