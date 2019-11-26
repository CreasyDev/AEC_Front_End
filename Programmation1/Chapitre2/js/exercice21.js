
// Calculer et afficher l’impôt provincial à charger selon le revenu imposable :
// revenu > 0 et $7000.00 inclus : 16% du revenu imposable
// > 7000 et $14000.00 inclus : $1120 + 19.5% du reste
// >14000 et $23000.00 inclus : $2485 + 21.5% du reste
// >23000 et $50000.00 inclus : $4420 + 24.5% du reste
// >50000 et + $11035 + 26% du reste.

var revenu;

revenu = Number (prompt('Quel votre revenu ?'));

if (revenu  > 0 && revenu <= 7000) {
    document.write ('1. Votre revenu est imposable de ' + revenu * 16/100 + '$');
}
else if (revenu >= 7000 && revenu <= 14000) {
    document.write ('2. Vous êtes imposable de ' + (revenu - 1120) * 19.5/100 + '$');
}
else if (revenu >= 14000 && revenu <= 23000) {
    document.write ('3. Vous êtes imposable de ' + (revenu - 2485) * 21.5/100 + '$');
}
else if (revenu >= 23000 && revenu <= 50000) {
    document.write ('4. Vous êtes imposable de ' + (revenu - 4420) * 24.5/100 + '$');
}
else {
    document.write ('5. Vous êtes imposable de ' + (revenu - 11035) * 26/100 + '$');
}
