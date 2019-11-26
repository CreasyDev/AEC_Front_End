
// Le Service de la Qualité de l’Environnement possède trois listes de noms d’industries reconnues
// pour leur haut taux de pollution atmosphérique. L’indice de pollution atmosphérique dépend
// de plusieurs facteurs et il est calculé régulièrement. L'indice de pollution varie de 0 à 1.

// Une valeur comprise entre 0,04 et 0,31 est dite normale. Si sa valeur de l’indice dépasse 0,31
// les industries de la liste A sont avisées de suspendre leurs activités jusqu’à ce que la valeur
// de l’indice redevienne normale. Si l’indice excède 0,40, on avise également la liste B et s’il
// excède 0,50, on avise aussi les industries de la liste C.

// Pour toutes les autres valeurs, écrire « Valeur impossible ».
// Faire le programme qui lit la valeur de l’indice de pollution atmosphérique et indique quelle liste
// devrait être affichée.0.06


var indice;

indice = Number (prompt('Indice de Pollution atmosphérique du moment'));

if (indice >= 0.04 && indice <= 0.31) {
    document.write ('<h3>Bonne nouvelle</h3><h3 class="texteVert texteItalic">L\'indice de pollution est normale<h3>');
}
else if (indice > 0.31 && indice <= 0.40) {
    document.write ('<h3>Industries de la liste A</h3><h3 class="texteRouge texteItalic">Attention ! Supendez vos activités, indice trop élevé !<h3>');
}
else if (indice > 0.40 && indice <= 0.50) {
    document.write ('<h3>Industries de la liste A et B</h3><h3 class="texteRouge texteItalic">Attention ! Supendez vos activités, indice trop élevé !<h3>');
}
else if (indice > 0.50 && indice <= 1.00) {
    document.write ('<h3>Industries de la liste A, B et C</h3><h3 class="texteRouge texteItalic">Attention ! Supendez vos activités, indice trop élevé !<h3>');
}
else {
    document.write ('<h3>Valeur impossible</h3>');
}
