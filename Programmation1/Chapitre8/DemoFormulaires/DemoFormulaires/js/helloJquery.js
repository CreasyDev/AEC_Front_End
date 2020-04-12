/**
 * Created by Shany on 2020-02-20.
*/
let nomUagerValide = false;
let pass1Valide = false;
let pass2Valide = false;
let emailValide = false;

$('.selectDC').hide();
$('.selectMarvel').hide();
$('.selectSW').hide();
$( "#boutonEnvoyer" ).prop('disabled', true);

var $univers = $('input[name="radioUnivers"]');

$univers.change(function() {
    let radioValue = $("input[name='radioUnivers']:checked").val();
    if(radioValue === "sw"){
        $('.selectDC').hide();
        $('.selectMarvel').hide();
        $('.selectSW').show();
    }
    else if(radioValue === "dc"){
        $('.selectDC').show();
        $('.selectMarvel').hide();
        $('.selectSW').hide();
    }
    else if(radioValue === "marvel"){
        $('.selectDC').hide();
        $('.selectMarvel').show();
        $('.selectSW').hide();
    }

});

$( "#swSelect" ).change(function() {
    let perso = $( "#swSelect option:selected" ).text();
    if(perso === "Obiwan"){
        $("#personnage").attr("src","img/billGates.jpg");
    }
});

$( "#boutonEnvoyer" ).click(function() {
    $('#idContainer').hide();
    alert($( "#userName" ).val() + " " + $( "#password" ).val() + " " +  $( "#email" ).val() +" " +  $( "#swSelect option:selected" ).text());
});

$( "#userName" ).keyup(function() {
    let nomUsager  = $( "#userName" ).val();

    if(nomUsager === "SLAY" || nomUsager === "Test"){
        $('#userHelp').html("Nom invalide");
        $('#userHelp').css("color","red");
        nomUagerValide = false;
    }
    else if(nomUsager.length >= 5){ //J'ajoute la condition au IF pour assurer que le nom d'usager a au moins 5 lettres
        $('#userHelp').html("Valide");
        $('#userHelp').css("color","green");
        nomUagerValide = true;
    }
    else{
        $('#userHelp').html("");
    }
    CheckFormulaire();
});

$( "#password" ).keyup(function() {
    let motPasse  = $( "#password" ).val();

    if(motPasse.length < 6){
        $('#passHelp').html("Faible");
        $('#passHelp').css("color","red");
        pass1Valide = false;
    }
    else if(motPasse.length > 9 && ContientMajuscule(motPasse) && ContientChiffre(motPasse)){
        $('#passHelp').html("Fort");
        $('#passHelp').css("color","green");
        pass1Valide = true;
    }
    else{
        $('#passHelp').html("Moyen");
        $('#passHelp').css("color","yellow");
        pass1Valide = false;
    }

    //On vérifie si les mots de passes sont identiques dans le cas où l'utilisateur décide de changer le premier mot de passe après le 2e
    if($( "#password2" ).val().length > 0){
        let motPasse2  = $( "#password2" ).val();
        if(motPasse === motPasse2 ){
            $('#passHelp2').html("Identique");
            $('#passHelp2').css("color","green");
            pass2Valide = true;
        }
        else{
            $('#passHelp2').html("Les mots de passe sont différents");
            $('#passHelp2').css("color","red");
            pass2Valide = false;
        }
    }
    CheckFormulaire();
});

function ContientMajuscule(str) {
    return (/[A-Z]/.test(str));
}

function ContientChiffre(str) {
    return (/[0-9]/.test(str));
}


$( "#password2" ).keyup(function() {
    let motPasse2  = $( "#password2" ).val();
    let motPasse  = $( "#password" ).val();

    if(motPasse === motPasse2 ){
        $('#passHelp2').html("Identique");
        $('#passHelp2').css("color","green");
        pass2Valide = true;
    }
    else{
        $('#passHelp2').html("Les mots de passe sont différents");
        $('#passHelp2').css("color","red");
        pass2Valide = false;
    }
    CheckFormulaire();
});

$( "#email" ).keyup(function() {
    let courriel  = $( "#email" ).val();

     if(ContientArobas(courriel) && ContientPoint(courriel)){
        $('#emailHelp').html("Valide");
        $('#emailHelp').css("color","green");
         emailValide = true;
    }
    else{
        $('#emailHelp').html("Non valide");
        $('#emailHelp').css("color","red");
         emailValide = false;
    }
    CheckFormulaire();
});
function ContientArobas(str) {
    return str.includes("@");
}
function ContientPoint(str) {
    return str.includes(".");
}


function CheckFormulaire(){
    if(nomUagerValide && pass1Valide && pass2Valide && emailValide){
        $( "#boutonEnvoyer" ).prop('disabled', false);
    }
    else{
        $( "#boutonEnvoyer" ).prop('disabled', true);

    }
}