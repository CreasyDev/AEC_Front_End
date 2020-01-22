
/* Lire une string, écrire le mot à l'envers. Patate devient etataP
            Indice :  mot[0] donne 'P'
            Indice : mot.length donne 6
*/

var mot = [];
mot[0] = 'p';
mot[1] = 'a';
mot[2] = 't';
mot[3] = 'a';
mot[4] = 't';
mot[5] = 'e';
mot[6] = '';

mot = prompt ('Entrez le mot patate');

for (var i = mot.length - 1; i > -1; i--) {
    document.write (mot[i]);
}



