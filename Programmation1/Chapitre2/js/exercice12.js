
// Calculer le prix des assurances pour un véhicule.
// Pour un garçon entre 16 et 25 ans, le prix des assurances est de 5 % de la valeur du véhicule.
// S’il est plus vieux, le taux sera de 3 %.
// Pour une fille entre 16 et 25 ans, le taux est de 3 % et de 2% pour une fille plus âgée.

// var sexe;
// var age;
// var valeur;
//
// sexe = (prompt('Veuillez indiquer votre sexe'));
// age = Number (prompt('Veuillez indiquer votre âge'));
// valeur = Number (prompt('Quel est le prix du véhicule'));
//
// if (sexe.toUpperCase() === 'M') {
//     if (age >= 16 && age <= 25) {
//         document.write ('<h1 class="texteVert"> Votre prime est de : ' + valeur * 0.05 + '$ </h1>');
//     }
//     else {
//         document.write ('<h1 class="texteVert">Votre prime est de : ' + valeur * 0.03 + '$ </h1>');
//     }
// }
// else if (sexe.toUpperCase() === 'F') {
//     if (age >= 16 && age <= 25) {
//         document.write ('<h1 class="texteMagenta">Votre prime est de : ' + valeur * 0.03 + '$ </h1>');
//     }
//     else {
//         document.write ('<h1 class="texteMagenta">Votre prime est de : ' + valeur * 0.02 + '$ </h1>');
//     }
// }
// else if (sexe.toUpperCase() === 'O') {
//     if (age >= 16 && age <= 25){
//         document.write ('<h1 class="texteItalic">Veuillez entrer une lettre correspondant à votre sexe</h1>');
//     }
// }
//
// else {
//     document.write ('<h1 class="texteItalic">Non ! Je veux une lettre correspondant à votre sexe</h1>');
// }



// CORRECTION DE L'EXERCICE 12


/**
 * Created by Shany on 2019-11-28.
 */

var prixAssurances;
var sexe;
var age;
var valeurVehicule;
var taux;

sexe = prompt("Entrez votre sexe : M ou F");
age = Number(prompt("Entrez votre age : "));
valeurVehicule = Number(prompt("Entrez la valeur de votre auto : "));

sexe = sexe.toUpperCase();

if(sexe === "M"){
    if(age >= 16 && age <= 25){
        taux = .05;
    }
    else if(age > 25){
        taux = .03;
    }
    else{
        document.write("VOUS NE POUVEZ PAS CONDUIRE!!!!");
    }
    prixAssurances = valeurVehicule * taux;
    document.write("<h1 class='rouge'>Le prix des assurances est de : " + prixAssurances +"</h1>");

}
else if(sexe === "F"){
    if(age >= 16 && age <= 25){
        taux = .03;
    }
    else if(age > 25){
        taux = .02;
    }
    else{
        document.write("VOUS NE POUVEZ PAS CONDUIRE!!!!");
    }
    prixAssurances = valeurVehicule * taux;
    document.write("<h1 class='magenta'>Le prix des assurances est de : " + prixAssurances +"</h1>");
}




