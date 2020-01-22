
/* Afficher le montant et la taxe de 9% pour les montants de $5.00 à $100.00 par tranche de $5.00. */

var montant;

for (var i = 5; i <= 100; i+=5) {
        montant = i + (i * 0.09);
    document.write (montant + ' $<br>');
}
