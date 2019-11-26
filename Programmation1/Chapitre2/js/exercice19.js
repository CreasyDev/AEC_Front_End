
// Lire le montant de vente et afficher le montant d’escompte correspondant
// sachant que le taux d’escompte est de 12% et n’est calculé que sur les montants supérieurs ou égaux à $500.00.

var montant;

montant = Number (prompt('Entrez le montant'));

if (montant >= 500) {
    document.write ('Le montant d\'escompte est de ' + montant * 12 / 100 + '');
}
else {
    document.write ('Désolez ! Votre montant est inférieur à 500. Vous ne pouvez bénéficier de l\'escompte');
}