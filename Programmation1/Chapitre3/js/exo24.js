
/* Trouvez TOUS les nombres de Armstrong de moins de 1000.
On dénomme nombre de Armstrong un entier naturel qui est égal à la somme des cubes
des chiffres qui le composent.

Exemple :
153 = = 13 + 53 + 33 = 1 + 125 + 27, est un nombre de Armstrong.
*/

var nb;
var somme = 0;

nb = Number(prompt("Donnez des nombres"));
var tmp = nb;

while(nb > 0){
    var d = parseInt(nb % 10);

    d = d ** 3;
    somme = somme + d;
    nb = parseInt(nb / 10);
}

if(tmp === somme){
    document.write("Ceci est un Nombre d'Amstrong");
}
else{
    document.write("Ceci n\'est pas un nombre d'Amstrong");
}
