

let erreur;
// let inputs = document.getElementByTagName("input");
let nom = document.getElementById("nom");
let age = document.getElementById("age");
let naissance = document.getElementById("naissance");
let lieuNaissance = document.getElementById("lieuNaissance");
let nom_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
let lieuNaissance_v = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?/;
let email_v = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let poids = document.getElementById("poids");
let taille = document.getElementById("taille");
let vaccin = document.getElementById("vaccin");
let domestiqueOuRace = document.getElementById("exampleRadios2");
let photos = document.getElementById('photos');
let email = document.getElementById('email');


document.getElementById("inscription").addEventListener("submit", function(e){

    if(!nom.value) {
        // erreur = "Veuillez entrer le nom de votre animal";
        alert(erreur = 'Veuillez entrer le nom de votre animal');
    }
    else if (nom_v.test(nom.value) === false) {
        erreur = "Format invalide pour le champs \'nom\'";
    }
    else if (nom.value.length <= 3) {
        this.value=[];
        erreur = "Le champs \'nom\' doit contenir au moins 4 caractères";
    }
    if(!age.value) {
        erreur = "Veuillez entrer l'âge de votre animal";
    }
    if(!naissance.value) {
        erreur = "Veuillez la date de naissance de votre animal";
    }
    if(!lieuNaissance.value) {
        erreur = "Veuillez le lieu de naissance de votre animal";
    }
    else if (lieuNaissance_v.test(lieuNaissance.value) === false) {
        erreur = "Format invalide pour le champs \'lieu de naissance\'";
    }
    if(!taille.value) {
        erreur = "Veuillez entrer la taille de votre animal";
    }
    if(!poids.value) {
        erreur = "Veuillez entrer le poids de votre animal";
    }

    let cbox = document.forms["inscription"]["vaccin"];

    if (cbox[0].checked === false || cbox[1].checked === false) {
        erreur = 'Veuillez renseigner si votre animal est vacciné ou non';
        return false;
    }
    else if (cbox[0].checked === false || cbox[1].checked === true) {
        return true;
    }

    let valid = false;

    if (document.getElementById('vaccin').checked || document.getElementById('vaccinNom').checked) {
        valid = true;
    }
    else  {
        alert('Veuillez renseigner si votre animal est vacciné ou non');
    }


    if (!email.value) {
        erreur = "Veuillez entrer votre courriel";
    }
    else if (email_v.test(email.value) === false) {
        erreur = "Format invalide pour le champs courriel";
    }


    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    }
    else {
        alert('Formulaire envoyé !');
    }
});