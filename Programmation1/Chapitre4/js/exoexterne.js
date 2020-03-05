
/* Lire 5 valeurs dans un tableau. Trier ce tableau en ordre décroissant.
Vous pouvez utiliser la méthode sort()
Essayez SANS la méthode sort() */

// var valeurs = [15,23,38,47,59];
//
// for (var i = 5; i > 0; i--) {
//     valeurs[i] = Math.floor (Math.random() * 5);
//     valeurs.sort();
// }
// document.write (valeurs);


/* Lire 10 noms et afficher en ordre alphabétique selon la 1ere lettre uniquement.
Indices :
var texte1 = “Shany”
var texte2 = “Carle”
console.log(texte1[0] < texte2[0]);
Va afficher false car ‘S’ n’est pas plus petit que ‘C’ */



// var noms = [];
// noms.sort();
//
// for (var i = 0; i < 10; i++) {
//     noms[i] = prompt ('Entrez un nom').toUpperCase();
//     document.write (i + noms[i] + ' <br>');
// }

// var array = ['React', 'Angular'];
//
// for (var i = 0; i < 10; i++) {
//     array.push(prompt('Entrez un élément').toUpperCase());
// }
//
// document.write (i + ' : ' + array + ' <br>');





// var valeurs = [1,2,3,4,5];
// var i = 0;
//
//
// while (i < 5) {
//     valeurs.sort();
//     i++;
// }
// document.write (valeurs + '<br>');

// var nombre = 0;


// Boucle for nombre impairs
// for (var i = 1; i < 10; i = i+2) {
//     // nombre = Number (prompt('Entrez un nombre'));
//     document.write (i + ' <br>');
// }

// Boucle for nombre pairs
// for (var i = 2; i <= 10; i = i+2) {
//     // nombre = Number (prompt('Entrez un nombre'));
//     document.write (i + ' <br>');
// }


// Boucle for décroissante
// for (var i = 10; i > 0; i--) {
//     document.write (i + ' Ceci est une boucle for décroissante <br>')
// }

// Boucle While croissante
// var i = 0;
//
// while (i < 10) {
//     document.write (i + ' Ceci est une boucle while <br>');
//     i++;
// }


// Boucle While décroissante
// var i = 10;
//
// while (i > 0) {
//     document.write (i + ' Ceci est boucle while décroissante <br>');
//     i--;
// }

// Boucle do While décroissante
// var i = 10;
//
// do {
//     document.write (i + ' Ceci est une boucle do while <br>')
//     i--;
// }
// while (i > 0);





/* Le collège offre 6 options aux étudiants. Ces options sont :

INFORMATIQUE
ADMINISTRATION
HISTOIRE
GÉNIE
GEOGRAPHIE
BUREAUTIQUE

Mettre ces options dans un tableau, puis demander à un étudiant d’entrer un nom d’option.
Vous lui répondez si OUI ou NON le collège offre cette option. */

// var tabOptions = ['INFORMATIQUE', 'ADMINISTRATION', 'HISTOIRE', 'GÉNIE', 'GEOGRAPHE', 'BUREAUTIQUE'];
// var choix;
// var existe = false;
//
//
// choix = prompt ('Entrez une option').toUpperCase();
//
// for (var i = 0; i < 6; i++) {
//     if (choix === tabOptions[i]) {
//         existe = true;
//     }
// }
// if (existe) {
//     document.write ('OUI ! nous offrons ce cours');
// }
// else {
//     document.write ('Désolé ! Cette option n\'existe pas');
// }





// var array = ['REACT', 'ANGULAR', 'jAVASCRIPT', 'VUE', 'LARAVEL', 'RUBY'];
// var choix;
// var trouver = false;
//
// choix = prompt ('Veuillez entrer une option de Framework').toUpperCase();
//
// for (var i = 0; i < 6; i++) {
//     if (choix === array[i]) {
//         trouver = true;
//     }
// }
// if (trouver) {
//     document.write ('OUI ! Nous utilisons ce Framework')
// }
// else {
//     document.write ('Désolé ! Cette option n\'existe pas');
// }



// var nombre = 91;
// var estPremier = true;
//
// for (var i = 2; i < nombre; i++) {
//     // Calcul du nombre premier dans une condition avec modulo %
//     if (91 % i === 0) {
//         estPremier = false;
//         document.write ('Ce nombre n\'est pas premier <br>');
//         document.write (nombre + ' est divisible par ' + i + '<br>');
//         break
//     }
// }
// if (estPremier) {
//     document.write ('Ce nombre est premier');
// }



// BOUCLE POUR INVERSER LES ÉLÉMENTS D'UN TABLEAU

// var eleves = ['Jean', 'Marc', 'Marion', 'Antoine'];
//
// for (var i = eleves.length -1; i >= 0; i--) {
//      document.write ('Bonjour ! ' + eleves[i] + '<br>');
// }






/* 1. On demande à l’utilisateur d’entrer un nombre entier strictement positif 1
    .
2. Si la valeur fournie par l’utilisateur n’est pas un entier, on affiche un message d’erreur
et on recommence.

3. Si le nombre fourni est négatif, on affiche un message d’erreur et on recommence.

4. Sinon, si ce nombre est 0, le programme termine.

5. Autrement, on affiche la décomposition en produit de facteurs premiers du nombre
reçu :

• On trouve le plus petit diviseur du nombre, en commençant par 2 ;

• On affiche ce diviseur à l’écran ;

• On divise le nombre par ce diviseur, et on recommence les deux dernières
étapes avec ce nombre (plus petit) ;

• Éventuellement ce processus devra s’arrêter, à vous de déterminer quand.

6. Une fois la liste affichée, on recommence (on demande à nouveau un nombre à
l’utilisateur) ! */



// var tabEntier = [];
// var termine = 0;
// var entier = false;
//
// while (tabEntier !== 0) {
//     tabEntier = Number (prompt('Veuillez entrer un nombre entier'));
//     tabEntier = Math.floor (Math.round(1));
//     if (tabEntier > 1) {
//         document.write ('Ce nombre diviseur n\'est pas un entier. Veuillez recommencer');
//     }
//     tabEntier++;
//
// }


//
// if (entier) {
//     document.write ('Ce nombre diviseur n\'est pas un entier. Veuillez recommencer');
// }
// else if (tabEntier < 0) {
//     document.write ('Ce nombre est inferieur à 0. Veuillez recommencer');
// }


/* Créez un objet nommé personne3 à l'aide de la méthode 1 et entrez vos informations personnelles.*/


// let personne3 = {
//     prenom : 'Franck',
//     nom : 'Gallard',
//     age : 49
// };
// document.write ('Je m\'appelle ' + personne3.prenom + ' ' + personne3.nom + ' et j\'ai ' + personne3.age + ' ans');


// let boucle = Object {nom: 'Franck', age: 49}
//
// for (let cle in personne3) {
//     alert(nom, age);
//     alert(personne3[cle]);
// }

// let personne4 = {};
// personne4.prenom = 'Yannick',
// personne4.nom = 'Tremblay',
// personne4.age = 38;
// document.write ('Son nom est ' + personne4.prenom + ' ' + personne4.nom + ', il a ' + personne4.age + ' ans');



// let cartePokemon1 = {
//     nom : 'Pikachu',
//     type : 'Électrique',
//     hp : 50,
//     nomAttaque1 : 'Agility',
//     nomAttaque2 : 'Thundershock',
//     degatsAttaque1 : 0,
//     degatsAttaque2 : 20
// };
// document.write ('Nom: ' + cartePokemon1.nom + '<br> type: ' + cartePokemon1.type + '<br>HP: ' + cartePokemon1.hp + '<br>Nom Attaque 1: ' + cartePokemon1.nomAttaque1 + '<br>Nom Attaque 2: ' + cartePokemon1.nomAttaque2 + '<br>Dégats Attaque 1: ' + cartePokemon1.degatsAttaque1 + '<br>Dégat Attaque 2: ' + cartePokemon1.degatsAttaque2);
// //
// let cartePokemon1 = {};
// cartePokemon1.nom

// class Pokemon {
//
//     constructor(nom,type,hp,nomAttaque1,nomAttque2) {
//         this.nom = nom;
//         this.type = type;
//         this.hp = hp;
//         this.Attaque1 = Attaque1;
//         this.Attaque2 = Attque2;
//     }
// }
//
// let Geninja = new Pokemon('Greninja', 'Eau', 230, '');


// class Personne {
//
//     constructor (prenom,nom,age) {
//         this.prenom = prenom;
//         this.nom = nom;
//         this.age = age;
//     }
// }
//
// let Franck = new Personne ('Franck', 'Gallard', 49);
// let Klaus = new Personne ('Klaus', 'Mickaelson', 31);
//
// document.write (Franck.prenom + ' ' + Franck.nom + ' ' + Franck.age + ' ans<br>');
// document.write (Klaus.prenom + ' ' + Klaus.nom + ' ' + Klaus.age + ' ans<br>');




// var tablangages = ['REACT', 'ANGULAR', 'VUE', 'JAVASCRIPT', 'LARAVEL', 'PHP'];
// var choix;
// var existe = false;
//
// choix = prompt ('Veuillez entrer une option de cours').toUpperCase();
// for (var i = 0; i < tablangages.length; i++) {
//     if (choix === tablangages[i]) {
//         existe = true;
//     }
// }
// if (existe) {
//     document.write ('OUI ! Ce cours est offert au sein de notre établissement');
// }
// else {
//     document.write ('DÉSOLÉ ! Cette option n\'existe pas');
// }


/* 2/  Mettre dans un tableau les 7 bonnes réponses à un test objectif (vrai ou faux).
 Par la suite, faire la correction du test d’un étudiant en lisant ses 7 réponses et afficher sa note sur 20.*/



// ------------------------------------------------------------------- //

// var nb = [];
// var compteur = 0;
//
// while (nb !== 666) {
//     nb = Number (prompt('veuillez entrer 10 nombres'));
//     document.write ('Vous avez entrer ' + compteur + ' Chifres <br>');
//     compteur++;
//
// }


// var i = 0;
//
// while (i < 10) {
//     document.write ('Affiche ' + i + ' <br>');
//     i++;
// }


// var compteur = 0;
// var i = 0;

// while (i !== 666) {
//
//     i = Number (prompt ('Entrez un nombre'));
//     if (i >= 0 && i <= 100) {
//         document.write ('Vous avez entrer le nombre ' + i + '<br>');
//         i++;
//     }
//     else {
//         document.write ('ERREUR !');
//     }
// }


// do {
//     var i = Number (prompt ('Entrez un nombre'));
//     if (i >= 0 && i <= 100) {
//         document.write ('Vous avez entrer le nombre ' + i + '<br>');
//         i++;
//     }
//     else {
//         document.write ('ERREUR !');
//     }
//
// } While (i !== 666);


// do {
//     var str = prompt("Please enter your email");
//     var email = "fgnlux@hotmail.ca";
//
//     if (str === email) {
//         document.write("Welcome back, Logged Successfully ! Your email is " + str);
//     } else {
//         document.write("Your email is incorrect, please try again");
//     }
// } while (str !== email);

/*
2/  Mettre dans un tableau les 7 bonnes réponses à un test objectif (vrai ou faux).
 Par la suite, faire la correction du test d’un étudiant en lisant ses 7 réponses et afficher sa note sur 20.*/

// var tabVraiouFaux = ['VRAI'];
// var string;
// var somme1 = 0;
// var somme2 = 0;
//
// for (var i = 1; i <= 7; i++) {
//     string = prompt ('Veuillez entrer VRAI ou FAUX').toUpperCase();
//
//     if (string === tabVraiouFaux[i]) {
//         document.write (string + '<br<br>');
//         somme1++;
//     }
//     else {
//         document.write (string + 'ERREUR !<br>');
//         somme2++;
//     }
// }


var nb;
var compteur1 = 0;
var compteur2 = 0;

while (nb !== 999) {
    nb = Number (prompt('Veuillez entrer un nombre'));

    if (nb >= 10 && nb <= 20) {
        document.write (compteur1 + '<br>');
        compteur1++;
    }
    else {

        document.write ('Vous avez fait une erreur !');
    }

}







