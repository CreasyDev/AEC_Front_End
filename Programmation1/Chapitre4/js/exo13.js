
/* Lire 12 nombres quelconques et les mettre dans un tableau.
Vérifier si le dernier nombre (12e) additionné avec un des 11 autres nombres font une somme de 15.
Si tel est le cas, afficher ces 2 nombres. */

var nb = [];

for (var i = 0; i < 12; i++) {
    nb[i] = Number (prompt ('Veuillez entrer un nombre'));
}
document.write (nb + '<br>');

if (nb[2] + nb[11] === 15) {
    document.write('Le dernier nombre est ' + nb[11] + '<br>');
    document.write("Le premier nombre est "+ nb[2]);
}
else {
    document.write ('Le nombre entré n\'est pas le bon');
}
document.write('<br> premier + dernier = ' + (nb[2] + nb[11]));





