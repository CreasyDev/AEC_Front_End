
// 15. Calculer et afficher la surface d'un rectangle pour seulement ceux ayant un périmètre d'au moins 100.

var longueur;
var largeur;
longueur = Number (prompt('Quelle est la hauteur du rectangle'));
largeur = Number (prompt('Quelle est la largeur du rectangle'));

if ( longueur + largeur >= 100) {
    document.write ('la surface de ce rectangle est de ' + longueur * largeur + '');
}
else {
    document.write ('Erreur !');
}


