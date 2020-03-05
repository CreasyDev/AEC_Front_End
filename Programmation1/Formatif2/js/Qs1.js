/* Question 1 : Chapitre 1 et 2 (opérations lecture/écriture et SI) (10 points)

Vous devez calculer les dommages de l’attaque Darkest Lariat du pokémon Incineroar.

Pour cela, il faut lire le type du pokémon adverse. Si c’est de type eau, les dommages seront doublés car les pokémons du type eau ont une faiblesse contre le feu.

Il faut ensuite faire deux pile ou face. Pour cela, il faut générer un nombre aléatoire entre 0 et 1. Si c’est face (1), l’attaque fait 100 de dégâts. Si c’est faux l’attaque fait 0 dégât. Répétez les opérations pour le second lancé.

Exemple :
type = “eau” face face → 400 de dégâts
type = “ténèbre” pile face → 100 dégâts */



let type=prompt("Type du pokemon adverse");
let degats=0;
let hasard= 0;

//Deux pile ou face
for(let i =0;i<2;i++){
    hasard = Math.floor((Math.random()*2));
    if(hasard === 1){
        document.write("face<br>");
        degats+=100;
    }
    else{
        document.write("pile<br>");
    }
}


if(type==="eau"){
    degats*=2;
}


document.write(degats+" de dégats");
