
// Créez un programme permettant de changer la couleur du texte de la console.
// Offrez trois choix de couleurs de fond et de texte à l'utilisateur
// Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur

var BG;
var texte;

BG = (prompt('Choisisez une couleur de fond'));
texte = (prompt('Choisisez une couleur de texte'));

if (BG === 'orange' && texte === 'indigo') {
    document.write('<body class="bgOrange"><h1 class="texteIndigo">Je suis un texte indigo !<h1></body>');
}
else if (BG === 'vert' && texte === 'jaune') {
    document.write('<body class="bgGreen"><h1 class="texteYellow">Je suis un texte jaune !<h1></body>');
}
else if (BG === 'magenta' && texte === 'blanc') {
    document.write('<body class="bgMagenta"><h1 class="texteWhite">Je suis un texte blanc !<h1></body>');
}
else {
    document.write ('Désolé ! Votre fond doit être: orange, vert ou magenta. Votre texte: indigo, jaune ou blanc...');
}