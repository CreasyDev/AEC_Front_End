
/* Faites afficher 2 4 6 8 10 sur 30 lignes */

for (var ligne = 0; ligne < 30; ligne++) {
    for (var nombre = 2; nombre <= 10; nombre = nombre + 2) {
        document.write (nombre + '<br>');
    }
    document.write ('<br>')
}