
// 5.  Lire un degré de température. Si la température est comprise entre
// -40 et -10 écrire « HAAAAAAAAA! Il fait froid». Sinon, écrire « Enfin une belle journée! ».

var temperature;

temperature = Number (prompt('Degrés'));

if (temperature >= -40 && temperature <= -10) {
    document.write('HAAAAAA ! Il fait froid !')
}
else if (temperature < -40) {
    document.write('<h1 class="texteRouge">C\'est pas humain !<h1>');
}
else {
    document.write('Enfin une belle journée !');
}
