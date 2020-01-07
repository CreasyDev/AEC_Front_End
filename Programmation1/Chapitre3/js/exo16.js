
/* Faire un programme qui boucle 10 fois. À toutes les itérations,
 votre programme génère un nombre aléatoire entre 0 et 1
 et vous demande aussi de choisir un nombre entre 0 et 1.
 Si le nombre est identique, vous gagnez, perdez sinon.
 Vous affichez le pointage à la fin des 10 itérations. */

var nombre0 = 0;
var nombre1 = 0;
var nombre = 0;

for (var boucle = 0; boucle < 10; boucle = boucle + 1) {
    nombre = Number (prompt('Veuillez entrez un nombre'));
    nombre = Math.floor (Math.random() * 2);
    document.write (nombre + '<br>');

    if (nombre0 === 0) {
        document.write ('Vous gagnez ');
        nombre0++;
    }
    else if (nombre1 === 1) {
        document.write ('Vous perdez ');
        nombre1++;
    }
}

document.write ('Il y a eu' + nombre0 + ' fois le nombre de 0 <br>');
document.write ('Il y a eu '  + nombre1 + ' fois le nombre 1');







