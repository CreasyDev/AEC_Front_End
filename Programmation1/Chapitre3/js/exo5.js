
/* Faire un programme qui affiche 100 nombres aléatoires 0 ou 1 et compter le nombre de 0 et de 1. */

var numberA = 1;

while(numberA !== 100){
    numberA = Math.floor(Math.random() * 100 + 1);
    document.write (numberA + ' Nombre aléatoire !<br>');
}



