
// A)  Si ce programme était exécuté, pourquoi y aurait-il un message d’erreur ?
// Entourez les erreurs et effectuez la correction.

// var nom = "Pikachu";
// var attaque = Queue de fer;
//
// if (nom === Dracaufeu)
// {
//     alert("Dracaufeu est l’évolution de Reptincelle")
// }
// else (nom = "Pikachu");
// {
//     console.log("Pikachu évolue en Raichu");
// }
// else
// {
//     Queue de fer = attaque;
//
// }


// RÉPONSE:

// 1/ La variable attaque est une string: sa valeur doit-être entre guillemets
// 2/ Il doit y avoir un else if et non 2 elses, la condition 2 ne doit pas avoir de (;)
// 3/ La valeur de la variable attaque est inversé
// 4/ Pour faire un print la variable attaque doit-être dans un document.write(attaque)

// Correction:

var nom = "Pikachu";
var attaque = "Queue de fer";

if (nom !== "Pikachu") {
    alert("Dracaufeu est l’évolution de Reptincelle")
}
else if (nom === "Pikachu"){
    console.log("Pikachu évolue en Raichu");
}
else {
    document.write (attaque);
}


// B) Quel sera la valeur de la variable Pokemon avec après avoir exécuté le code ci-dessous si

// var Pokemon;
// var attaque1 = "rogne";
// var attaque2 = "tonnerre";
//
// if (attaque1 === "rogne" &&  attaque2 === "eclair"){
//     Pokemon = "Pikachu";
// }
// else if (attaque1 === "rogne" ||  attaque2 === "eclair"){
//     Pokemon = "Raichu";
// }
// else{
//     Pokemon = "Salamèche";
// }
//
// alert(Pokemon);






