
// 6. Lire 2 nombres au clavier.
// Si ces 2 nombres sont : supérieurs ou égaux à 10, affichez leur somme.
// inférieurs à 10 affichez leur produit.
// Si l'un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10,
// affichez la différence entre les deux nombres.

var nombre1;
var nombre2;

nombre1 = Number (prompt('Entrez le 1er nombre'));
nombre2 = Number (prompt('Entrez le 2eme nombre'));

if (nombre1 >= 10 && nombre2 >= 10) {
    document.write ('La somme des deux nombres est de ' + (nombre1 + nombre2) + '');
}
else if (nombre1 < 10 && nombre2 < 10) {
    document.write ('Leur produit est de ' + nombre1 * nombre2 + '')
}
else if (nombre1 >= 10 && nombre2 < 10) {
    document.write ('Leur différence est de ' + (nombre1 - nombre2) + '')
}
else {
    document.write ('Dans le second cas: leur différence est de ' + (nombre2 - nombre1) + '')
}