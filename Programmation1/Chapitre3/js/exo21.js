
/* Faites afficher 1 3 5 7 9 11 sur 13 lignes */

for (var ligne = 1; ligne < 13; ligne++) {
    for (var nombre = 1; nombre <= 11; nombre = nombre + 2) {
        document.write (nombre + '<br>');
    }
    document.write ('<br>')
}