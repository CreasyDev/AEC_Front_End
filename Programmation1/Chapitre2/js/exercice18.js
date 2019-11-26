
// Lire une note d’examen et afficher « Échec » si la note est inférieure à 60 et « Bravo »
// si la note est supérieure ou égale à 60.

var note;

note = Number (prompt('Quelle est votre note ?'));

if (note >= 60) {
    document.write ('BRAVO !');
}
else {
    document.write ('ÉCHEC !');
}