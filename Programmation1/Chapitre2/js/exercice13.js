
// 13. Lire 2 nombres A et B différents. Trouver et afficher le plus petit et le plus grand.
// Si les deux nombres sont identiques, affichez un message d'erreur à l'utilisateur.

var A;
var B;

A = Number (prompt('Veuillez entrer le 1er nombre'));
B = Number (prompt('Veuillez entrer le 2eme nombre'));

if (A < B) {
    document.write (A);
}
else if (A > B) {
    document.write (A);
}
else {
    document.write (' A ne peut pas être égale à B');
}