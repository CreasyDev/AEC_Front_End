
// 14. Lire 3 nombres A, B et C différents.
// Trouver et afficher le plus petit et le plus grand.

// var A;
// var B;
// var C;
//
// A = Number (prompt('Entrez un 1er nombre SVP'));
// B = Number (prompt('Entrez un 2eme nombre SVP'));
// C = Number (prompt('Entrez un 3eme nombre SVP'));
//
// if (A < B && A < C) {
//     document.write (A + ' qui est A est inférieur à B et C');
// }
// else if (B < A && B < C) {
//     document.write (B + ' qui est B est inférieur à A et C');
// }
// else if (C < A && C < B) {
//     document.write (C + ' qui est C est inférieur à A et B');
// }
// else {
//     if (A > B && A > C ) {
//         document.write (A + ' qui est A est supérieur à B et C');
//     }
//     else if (B > A && B > C) {
//         document.write (B + ' qui est B est supérieur à A et C');
//     }
//     else {
//         document.write (C + ' qui est C est supérieur à A et B');
//     }
// }


// CORRECTION DE L'EXERCICE 14

/**
 * Created by Shany on 2019-11-28.
 */

var A, B, C;
A = Number(prompt("Entrez le nombre A"));
B = Number(prompt("Entrez le nombre B (différent de A et C)"));
C = Number(prompt("Entrez le nombre C (différent de A et B)"));


if (A < B && A < C){ //A est le plus petit
    if(B > C){
        document.write("A plus petit :" + A + " B plus grand " + B);
    }
    else if(C > B){
        document.write("A plus petit :" + A + " C plus grand " + C);
    }
    else{
        document.write("Vous avez entré des nombres égaux ou pas des nombres");
    }
}
else if( B < A && B < C){ //B est le plus petit
    if(A > C){
        document.write("B plus petit :" + B + " A plus grand " + A);
    }
    else if(C > A){
        document.write("B plus petit :" + B + " C plus grand " + C);
    }
    else{
        document.write("Vous avez entré des nombres égaux ou pas des nombres");
    }
}
else if(C < A && C < B){ //C est le plus petit
    if(A > B){
        document.write("C plus petit :" + C + " A plus grand " + A);
    }
    else if(B > A){
        document.write("C plus petit :" + C + " B plus grand " + B);
    }
    else{
        document.write("Vous avez entré des nombres égaux ou pas des nombres");
    }
}
else{
    document.write("Vous avez entré des nombres égaux ou pas des nombres");
}