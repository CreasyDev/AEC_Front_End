
// Lire une lettre de l'alphabet. Afficher le mot voyelle (pour : a, e, i, o, u, y)
// ou le mot consonne (pour les autres) selon la lettre lue.
// Assurez-vous que l'utilisateur puisse entrer les lettres en minuscules ou en majuscules.

var lettre;
var voyelle;
var consonne;

lettre = (prompt('Entrez une lettre'));

if (lettre.toUpperCase() === 'a' || lettre.toUpperCase() === 'e' || lettre.toUpperCase() === 'i' || lettre.toUpperCase() === 'o' || lettre.toUpperCase() === 'u' || lettre.toUpperCase() === 'y') {
    document.write ('voyelle');
}
else if (lettre.toLowerCase() === 'a' || lettre.toLowerCase() === 'e' || lettre.toLowerCase() === 'i' || lettre.toLowerCase() === 'o' || lettre.toLowerCase() === 'u' || lettre.toLowerCase() === 'y') {
     document.write ('voyelle');
}
else {
    document.write ('consonne');
}


