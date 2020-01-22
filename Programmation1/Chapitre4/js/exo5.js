
/* Modifiez le numéro précédent pour trouver le plus grand nombre possible en JavaScript. */

var tabExp2 = [];

for(var i = 0; i <= 1024; i++){
    tabExp2[i] = Math.pow(2,i);
    document.write("2 exposant " + i + " = " + tabExp2[i] + "<br>");
}
