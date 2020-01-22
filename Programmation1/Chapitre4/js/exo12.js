
/* Mettre dans un tableau les 10 bonnes réponses à un test objectif (vrai ou faux).
 Par la suite, faire la correction du test d’un étudiant en lisant ses 10 réponses et afficher sa note sur 10. */


var reponse= ['VRAI'];
var sommetab1 = 0;
var sommetab2 = 0;

for(var i = 0; i < 15 ; i++){
    reponse[i] = prompt("Veuillez entrer vos réponse: vrai ou faux").toUpperCase();

    if (reponse[i] === 'VRAI'){
        document.write(reponse[i] + ' <br>');
        sommetab1++;
    }
    else {
        document.write(reponse[i] + ' <br>');
        sommetab2++;
    }
}

document.write("Vous avez eu : " + sommetab1 + ' bonnes réponses<br>');
document.write("Vous avez eu : " + sommetab2 + ' Mauvaises réponses<br>');
document.write("Vous avez obtenu une note de : " + (sommetab1 / 10));
