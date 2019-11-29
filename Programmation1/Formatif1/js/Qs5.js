
// Écrire le code qui permet de lire au clavier la valeur d’un angle d’une main de robot
// et d’afficher sa position. Pour faire ce choix, utilisez la table  suivante :

// 		position à afficher	angle

// 		Main fermée	                 0 <= angle <= 39
// 		Main agrippe		         40 <= angle <= 89
// 		Main ouverte		         90 <= angle <= 180
//
// Si l’angle ne contient aucune de ces valeurs, alors affichez ″Le robot est hors de contrôle″.

var angle;

angle = Number (prompt('Angle de la main du robot'));

if (angle >= 0 && angle <= 39 ) {
    document.write ('La main du robot est fermée');
}
else if (angle >= 40 && angle <= 89) {
    document.write ('La main du robot agrippe');
}
else if (angle >= 90 && angle <= 180) {
    document.write ('La main du robot est ouverte');
}
else {
    document.write ('Le robot est hors de contrôle !');
}