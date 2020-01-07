
/* Faites afficher 10 8 6 4 2 0 sur 12 lignes */

for (var ligne = 0; ligne < 12; ligne++) {
    for (var nombre = 10; nombre >= 0; nombre = nombre - 2) {
        document.write (nombre + '<br>');
    }
    document.write ('<br>')
}