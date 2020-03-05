
/* Question 2 : Chapitre 3-4 (les boucles) (10 points)
Utilisez une variable nommée nb et 2 boucles for imbriquées pour produire
le résultat suivant à l’aide  d’un document.write. */

let nb=0;
let lignes=10;
let col=20;

for(let i=0;i<lignes;i++){
    for(let j=0;j<col;j++){
        document.write(nb+" ");
        nb+=5;
    }
    document.write("<br>");
}
