
// 14. Lire 3 nombres A, B et C différents.
// Trouver et afficher le plus petit et le plus grand.

var A;
var B;
var C;

A = Number (prompt('Entrez un 1er nombre SVP'));
B = Number (prompt('Entrez un 2eme nombre SVP'));
C = Number (prompt('Entrez un 3eme nombre SVP'));

if (A < B && A < C) {
    document.write (A + ' qui est A est inférieur à B et C');
}
else if (B < A && B < C) {
    document.write (B + ' qui est B est inférieur à A et C');
}
else if (C < A && C < B) {
    document.write (C + ' qui est C est inférieur à A et B');
}
else {
    if (A > B && A > C ) {
        document.write (A + ' qui est A est supérieur à B et C');
    }
    else if (B > A && B > C) {
        document.write (B + ' qui est B est supérieur à A et C');
    }
    else {
        document.write (C + ' qui est C est supérieur à A et B');
    }
}