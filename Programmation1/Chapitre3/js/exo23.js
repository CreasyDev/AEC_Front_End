
/* Créez un programme qui lit un nombre et affiche tous les chiffres de ce
nombre séparément dans les deux sens. */


var nb = prompt('Entrez un nombre');

for (var i = 0; i < nb.length; i++) {
    document.write (nb[i] + '<br>');
}
document.write (' ---------------- ');

for (var i = nb.length-1; i >= 0; i--) {
    document.write (nb[i] + '<br>');
}



