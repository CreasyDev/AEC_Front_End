
/* Créez un tableau de 10 cellules qui contient une chaîne de caractères à deux valeurs (Pile ou Face).
 Vous décidez manuellement des valeurs qui seront dans le tableau (ce n’est pas random) et affichez ces valeurs
 à l’aide d’une boucle Pour. */

var tableau = [];
var tableau1;

tableau[0]='pile';
tableau[1]="face";
tableau[2]='pile';
tableau[3]='pile';
tableau[4]='pile';
tableau[5]='pile';
tableau[6]='face';
tableau[7]='face';
tableau[8]='pile';
tableau[9]='face';

// OU avec 10 valeurs...
tableau1 = ['pile','face','pile','pile','face','pile','pile','pile','pile'];

for (var i = 0; i < tableau.length-1; i++){
    document.write(tableau[i] + "<br>");
}
