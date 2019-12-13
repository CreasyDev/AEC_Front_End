
/* Faire un programme qui affiche 100 nombres aléatoires 0 ou 1 et compter le nombre de 0 et de 1. */

var nombreAleatoire = 1;

while(nombreAleatoire !== 100){
    nombreAleatoire = Math.floor(Math.random() * 100 + 1);
    document.write (nombreAleatoire + ' Nombre aléatoire !<br>');
}



