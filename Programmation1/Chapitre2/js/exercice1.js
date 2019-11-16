
// 1.  Lire deux nombres et afficher le plus grand des deux.

var nombre1;
var nombre2;

nombre1 = Number (prompt('Entrez un nombre'));
nombre2 = Number (prompt('Entrez un nombre'));

if (nombre1 > nombre2) {
    console.log('Ce nombre est le plus grand');
}
else if (nombre1 < nombre2) {
    console.log('C\'est ce nombre le plus grand');
}
else {
    console.log('Ces 2 nombres sont égaux');
}




