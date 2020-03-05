
/* Lire 2 valeurs dans un tableau. Inverser ces deux valeurs. */

var tabNombres = [];
var nb1, nb2, temp;

for(var i = 0; i < 12; i++){
    tabNombres[i] = Math.floor(Math.random() * 10);
    console.log(tabNombres[i]);
}

document.write(tabNombres + "<br>");
nb1 = Number(prompt("Quelle indice voulez-vous échanger?"));
nb2 = Number(prompt("Quelle indice voulez-vous échanger?"));

temp = tabNombres[nb1];
tabNombres[nb1] = tabNombres[nb2];
tabNombres[nb2]= temp;
document.write(tabNombres);



/* Mélanger un tableau */
/* ------------------- */

// var tabNombres = [1,2,3,4,5,6,7,8,9];
// var aleatoire, temp;
//
// document.write (tabNombres + "<br>");
//
// for(var i = 0; i < tabNombres.length; i++){
//     // On génère un nombre aléatoire qui représente l'indice à échanger
//     aleatoire = Math.floor(Math.random() * 9);
//     console.log("On échange l'indice " + i + " avec l'indice " + aleatoire);
//     temp = tabNombres[i];
//     tabNombres[i] = tabNombres[aleatoire];
//     tabNombres[aleatoire] = temp;
// }
// document.write(tabNombres + "<br>");







