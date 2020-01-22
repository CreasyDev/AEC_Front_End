
/* À l’aide d’une boucle, créez un tableau de 1000 valeurs contenant vrai ou faux (boolean).
 Ces valeurs doivent être aléatoires. Ensuite, à l’aide d’une autre boucle,
  comptez le nombre de vrai et de faux et faites-les afficher. */


// var tabVraiOuFaux = [];
// /* var variable = 0 pour compter combien de vrai et de faux */
// var nbVrais = 0;
// var nbFaux = 0;
//
// for(var i = 0; i < 1000; i++){
//     tabVraiOuFaux[i] = Boolean(Math.floor(Math.random() * 2));
//     document.write (tabVraiOuFaux[i] + '<br>');
//     if(tabVraiOuFaux[i] === true){
//         nbVrais++;
//     }
//     else{
//         nbFaux++;
//     }
// }
// /* décompte de combien de vrai et de faux */
// document.write ('Il y a ' + nbVrais + ' vrais <br>');
// document.write ('Il y a ' + nbFaux + ' faux');

/* ------------------------------------------------------------------------------ */


var tabVraiOuFaux = [];
var nbVrais = 0;
var nbFaux = 0;

for(var i = 6; i < 1000; i++){
    tabVraiOuFaux[i] = (Math.floor(Math.random() < 0.5));
    document.write (tabVraiOuFaux[i] + '<br>');
    if(tabVraiOuFaux[i] === true){
        nbVrais++;
    }
    else{
        nbFaux++;
    }
}
document.write ('Il y a ' + nbVrais + ' vrais <br>');
document.write ('Il y a ' + nbFaux + ' faux');