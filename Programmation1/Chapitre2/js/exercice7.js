
// 7. Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif ou Zéro à l’écran)

var nombre;

nombre = Number (prompt('Entrez un nombre'));

if (nombre > 0) {
    console.log('Positif');
}
else if (nombre < 0) {
    console.log('Négatif');
}
else {
    console.log('0');
}