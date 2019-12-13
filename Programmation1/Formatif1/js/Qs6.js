

/* Vous devez compléter un programme qui permet de calculer la facture pour l’achat d’un robot imprimable en 3 dimensions.

L’usager doit sélectionner le contrôleur
55$ pour un RaspBerry Pi
15$ pour un Raspberry Pi Zero

L’usager doit décider du nombre de moteurs entre 2 et 24.
Un moteur coûte 5$

L’usager décide s’il veut une caméra USB ou non
La caméra coûte 35$

L’usager décide s’il veut une matrice de LEDS pour les yeux
La matrice coûte 10$ pour les deux yeux.

Il faut ensuite ajouter 20$ pour le filament 3D.
Il faut ajouter 15$ pour la batterie USB.

RasPiBot aimerait que votre programme affiche

un résumé de l’achat
ex: “Robot avec Raspberry Pi Zero, 10 moteurs, pas de caméra, pas de matrice de LEDS.”
le prix
le prix avec la livraison de 15%.
 */


// RÉPONSE:

// var moteur = 5;
// var filaments = 20;
// var batterie = 15;
// var prix = (moteur * 5) + filaments + batterie;
// var prixTotal = prix * 15/100;
//
// console.log ('Robot avec Raspberry Pi Zero, 8 moteurs, 1 filament et une batterie.');
// console.log ('Le prix est '+ prix +'$');
// console.log ('Le prix total est ' + (prix + prixTotal) + '$');


// CORRECTION:
// ------------------- //

var controleur;
var controleurTexte;
var nbMoteurs;
var nbMoteursTexte;
var camera;
var cameraTexte;
var matriceLed;
var matriceLedTexte;
var prix = 0;
var prixLivraison = 0;

controleur = prompt("Pi ou PiZero?");
nbMoteurs = Number(prompt("Entrez le nombre de moteurs (2-24)"));
camera = prompt("camera USB oui ou non");
matriceLed = prompt("Matrice LED oui ou non");

if(controleur.toUpperCase() === "PI"){
    prix+=55;
    controleurTexte = "Robot avec Raspberry Pi";
}
else if(controleur.toUpperCase() === "PIZERO") {
    prix+=15;
    controleurTexte = "Robot avec Raspberry Pi Zero";
}
else{
    controleurTexte = "Erreur de contrôleur";
}

if(nbMoteurs>=2 && nbMoteurs <=24){
    prix+= (nbMoteurs*5);
    nbMoteursTexte = nbMoteurs + "moteurs";
}
else{
    nbMoteursTexte = "Erreur dans les moteurs";
}

if(camera.toUpperCase() ==="OUI"){
    prix+=35;
    cameraTexte = " avec caméra USB";
}
else{
    cameraTexte = " sans caméra USB";
}

if(matriceLed.toUpperCase() === "OUI"){
    prix+=10;
    matriceLedTexte = "avec matrice de LEDS";
}
else{
    matriceLedTexte = "sans matrice de LEDS";
}

prix+=35; // On ajoute le filament et la batterie
prixLivraison = prix * 1.15;

document.write(controleurTexte + nbMoteursTexte + cameraTexte + matriceLedTexte);
document.write("Le prix est de : " + prix);
document.write("Le prix avec la livraison est de " + prixLivraison);

