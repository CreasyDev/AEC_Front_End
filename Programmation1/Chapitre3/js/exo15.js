
/* Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer).
Afficher combien de nombres positifs ont été entrés ainsi que combien de nombres négatifs ont été entrés.
 */

var nbPositifs = 0;
var nbNegatifs = 0;
var nb = 1;

while(nb !== 0 ){
    nb = Number(prompt("Entrez un nombre, 0 pour quitter"));

    if(nb < 0){
        nbNegatifs++;
    }
    else if(nb > 0 ){
        nbPositifs++;
    }
}
document.write("Somme des positifs : " + sommePositifs);
document.write("Somme des négatifs : " + sommeNegatifs);

