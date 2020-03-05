
/* C’est le temps du recensement. Nous aimerions connaître le nombre d’enfants
que chaque famille possède et par la suite afficher un tableau de statistiques comme suit :
Le nombre d’enfants est l’indice du tableau.

Regrouper ensemble les 10 enfants et plus.

Truc : il faut utiliser l'indice du tableau pour représenter le nombre d'enfants.
Par exemple : tab[2] = 10; signifie qu'il y a 10 familles qui ont 2 enfants. */

// var tab = [];
// /* La valeur est le nombre d'enfants */
// tab [1] = 0;
// tab [2] = 0;
// tab [3] = 0;
// tab [4] = 0;
// tab [5] = 0;
// tab [6] = 0;
// tab [7] = 0;
// tab [8] = 0;
// tab [9] = 0;
// tab [10] = 0;
//
// for (var i = 1; i < tab.length; i++) {
//     /* nombre de d'enfants à entrer dans prompt */
//     tab[i] = Number (prompt ('Entrez le nombre d\'enfants'));
//     document.write ( + tab[i] + ' enfants pour ' + i + '  familles <br>');
// }




/* CORRECTION */


var tabRecensement = [0,0,0,0,0,0,0,0,0,0,0];
var nbEnfants = 0;

while(nbEnfants !== 666){
    nbEnfants = Number(prompt('Combien avez-vous d\'enfant(s), entrez 666 pour quitter'));

    if(nbEnfants >= 0 && nbEnfants < 30){

        if(nbEnfants < 10){
            tabRecensement[nbEnfants]++;
        }
        else{
            tabRecensement[10]++;
        }
    }
}

for(var i = 0; i <= 10; i++){

    if(i !== 10){
        document.write('Nombre de familles avec ' + i + ' enfants = ' + tabRecensement[i] + '<br>');
    }
    else{
        document.write('Nombre de familles avec 10 enfants = ' + tabRecensement[10] + '<br>');
    }
}






