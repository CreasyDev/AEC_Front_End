
// 6.   Lire une note au clavier et afficher la lettre correspondante.
// 90 et plus : A
// Entre 80 et 90 : B
// Entre 70 et 80 : C
// Entre 60 et 70 : D
// Moins de 60 : E

// * Codez l’exercice #6 2 fois, une fois en débutant le IF par la cote A et une fois par la cote E
// (en sens inverse).


var nombre

nombre = Number (prompt('chiffre'));

// if (nombre >= 90) {
//     console.log('A');
// }
//
//
// else if (nombre > 80 && nombre < 90) {
//     console.log('B');
// }
//
//
// else if (nombre > 70 && nombre < 80) {
//     console.log('C');
// }
//
//
// else if (nombre > 60 && nombre < 70) {
//     console.log('D');
// }
//
//
// else {
//     console.log('E');
// }


// EXO 6 VERSION 2 ------------------------------------------------ //
// ---------------------------------------------------------------- //


if (nombre >= 90) {
    console.log('E');
}


else if (nombre > 80 && nombre < 90) {
    console.log('D');
}


else if (nombre > 70 && nombre < 80) {
    console.log('C');
}


else if (nombre > 60 && nombre < 70) {
    console.log('B');
}


else {
    console.log('A');
}