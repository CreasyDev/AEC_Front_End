
/* Afficher les nombres de 1 à 10 avec le carré
 et le cube de chacun de ces nombres. */

var carre, cube;

for(var i = 1; i <= 10; i++){
    carre = Math.pow(i,2);
    cube = Math.pow(i,3);
    document.write(i + " au carré =  " + carre + " au cube = " + cube + "<br>");
}
