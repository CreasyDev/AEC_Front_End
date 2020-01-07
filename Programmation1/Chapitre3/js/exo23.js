
/* Créez un programme qui lit un nombre et affiche tous les chiffres de ce
nombre séparément dans les deux sens. */


var nb = new Array(5);

nb[0] = 'S';
nb[1] = 'H';
nb[2] = 'A';
nb[3] = 'N';
nb[4] = 'Y';

var promptText;

promptText = prompt ('Entrez une lettre du prénom');

document.write(nb.sort() + '<br>');
document.write(nb.reverse());


