
/* Faites afficher 1 2 3 4 5 6 7 8 9 10 sur 10 lignes */

for (var ligne = 0; ligne < 10; ligne++) {
    for (var nombre = 1; nombre <= 10; nombre++) {
        document.write (nombre + '<br>');
    }
    document.write ('<br>')
}