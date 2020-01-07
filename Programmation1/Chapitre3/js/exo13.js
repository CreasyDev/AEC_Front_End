
/* Afficher les nombres impairs de 1 à 49, et mettre 5 valeurs par ligne. */

var valeur = 0;

for (var nombre = 1; nombre <= 49; nombre+=2) {
    document.write (nombre + '<br>')
    valeur++;
    if (valeur === 5) {
        document.write ('<br>');
        valeur = 0;
    }
}


