
// 4.  Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement si le deuxième nombre
// est différent de zéro. Par contre si ce nombre est zéro inscrivez le message suivant :‘Division par zéro interdite.’,
// si ce nombre n’est pas zéro vous devez imprimer le résultat.


var number1;
var number2;

number1 = Number (prompt('Entrez un nombre'));
number2 = Number (prompt('Entrez un nombre'));

if (number2 !== 0) {
    console.log(number1 / number2);
}
else if (number2 === 0) {
    console.log('Division par zéro interdite');
}

else {
    console.log(number1 / number2);
}
