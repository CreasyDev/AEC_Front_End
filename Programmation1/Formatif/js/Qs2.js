
// Vous devez calculer le nombre de points de dommages de l’attaque Mad Bull GX de Tauros. L’attaque fait :
// 100 points de dommages si l’adversaire a moins de 60 points de vie (hp).
// 150 points de dommages si l’adversaire a entre 60 et 79 hp.
// 200 points de dommages si l’adversaire a entre 80 et 99 hp.
// 250 points si l’adversaire a 100 hp et plus.

// Écrire un algorithme le code qui permet de :
// Calculer et d’afficher les points de dommages de l’attaque Mad Bull GX à partir des points de vie d’un Pokémon adversaire.

var points;

points = Number (prompt('Nombre de points adversaire'));

if (points <= 60) {
    document.write ('Les dommages sont de 100 points');
}
else if (points > 60 && points < 79) {
    document.write ('Les dommages sont de 150 points');
}
else if (points > 80 && points < 99) {
    document.write ('Les dommages sont de 200 points');
}
else {
    document.write ('Les dommages sont de 250 points');
}
