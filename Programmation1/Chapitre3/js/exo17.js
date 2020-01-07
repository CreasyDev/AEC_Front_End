
/* Lire le code de sexe d’un individu (M ou F) et afficher le sexe de l’individu par le mot correspondant (Masculin ou Féminin).
 Traiter plusieurs codes de sexe jusqu’à temps que ce code soit autre chose que M ou F.
 De plus afficher le nombre de M qui ont été entrés ainsi que le nombre de F qui ont été entrés. */


var compteur = 0;
var sexe = '';


do {
    sexe = (prompt('Entrez la lettre correspondant au sexe: M = masculin ou F = feminin'));
    if (sexe.toUpperCase() === 'M') {
        document.write ('Vous êtes de sexe Masculin <br>');
        compteur++;
    }
    else if (sexe.toUpperCase() === 'F') {
        document.write ('Vous êtes de sexe Féminin <br>');
        compteur++;
    }
    else {
        document.write ('Veuillez entrez M ou F');
    }
}

while (sexe !== 'M' || sexe !== 'F');


document.write ('Vous avez entrez ' + compteur + ' la lettre M');


