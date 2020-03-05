
/* Mettre dans un tableau les 10 bonnes réponses à un test objectif (vrai ou faux).
 Par la suite, faire la correction du test d’un étudiant en lisant ses 10 réponses et afficher sa note sur 10. */


// var reponse = ['VRAI'];
// var sommetab1 = 0;
// var sommetab2 = 0;
//
// for(var i = 0; i < 10 ; i++){
//     reponse[i] = prompt("Veuillez entrer vos réponse: vrai ou faux").toUpperCase();
//
//     if (reponse[i] === 'VRAI'){
//         document.write(reponse[i] + ' <br>');
//         sommetab1++;
//     }
//     else {
//         document.write(reponse[i] + ' <br>');
//         sommetab2++;
//     }
// }
//
// document.write("Vous avez eu : " + sommetab1 + ' bonnes réponses<br>');
// document.write("Vous avez eu : " + sommetab2 + ' mauvaises réponses<br>');
// document.write("Vous avez obtenu une note de : " + (sommetab1 / 10));




/* CORRECTION */
/* Tu dois avoir 2 tableaux, un avec les bonnes répoonses et un où l'usager entre
 ses réponses ou du moins une variable pour les réponses de l'usager */

// var bonnesReponses = [true,false,false,false,true,true,false,false,true,true];
// var tabEtudiant = [];
// var nbBonnesReponses = 0;
//
// for(var i = 0; i < bonnesReponses.length; i++){
//     // tabEtudiant[i] = prompt ('Entrez vos réponses');
//     tabEtudiant[i] = Boolean (Math.floor (Math.random() * 2));
// }
//
// for (var j = 0; j < bonnesReponses.length; j++) {
//     if (bonnesReponses[j] === tabEtudiant[j]) {
//         // document.write (bonneReponses + '<br>');
//         nbBonnesReponses++;
//     }
// }
//
// document.write("Vous avez eu : " + nbBonnesReponses + ' bonnes réponses<br>');






/* CORRECTION */

// On décide des réponses du tableau bonnesReponses
// var bonnesReponses =[true,false,false,false,true,true,false,false,true,true];
// var examenEtudiant = [];
// var nbBonnesReponses = 0;
//
// for(var i = 0; i < bonnesReponses.length; i++){
//     //Plutôt que de demander les réponses dans un prompt, je fais un tableau de valeurs aléatoires.
//     examenEtudiant[i] = Boolean(Math.floor(Math.random()*2));
// }
//
// for(var j = 0; j < bonnesReponses.length; j++){
//     if(bonnesReponses[j] === examenEtudiant[j]){
//         nbBonnesReponses++;
//     }
// }
//
// document.write("L'étudiant a eu " + nbBonnesReponses + " bonnes réponses");


