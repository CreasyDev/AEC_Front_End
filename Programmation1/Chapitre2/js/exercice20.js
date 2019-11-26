
// Lire l’âge d’un individu et afficher le mot :
// « Adulte » si l’âge est >= 18 ans
// « Adolescent » si l’âge est compris entre 12 et 17 ans inclusivement
// « Enfant » si l’âge est < 12 ans.

var age;

age = Number (prompt('Quel est votre âge ?'));

if (age >= 18) {
    document.write ('Vous êtes adulte');
}
else if (age >= 12 && age <= 17) {
    document.write ('Vous êtes adolescent');
}
else {
    document.write ('Vous êtes encore enfant');
}