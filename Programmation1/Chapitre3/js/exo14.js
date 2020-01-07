
/* Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer).
 Afficher la somme des nombres positifs ainsi que la somme des nombres négatifs. */


var nombre = 0;


do {
    nombre = Number(prompt('Entrez une série de nombres POSITIFS et NÉGATIFS :'));
    if (nombre > 0) {
        document.write (nombre + ' est positif <br>');
        nombre++;
    }
    else if (nombre < 0) {
        document.write (nombre + ' est négatif <br>');
        nombre--;
    }
} while (nombre !== 0);









