
/* Question 3 : Chapitre 5 (les tableaux) (10 points)

Créez un tableau nommé tabChance qui contient 100 nombres aléatoires entre 1 et 200. (4 points)
Demandez un nombre à l’usager entre 1 et 200. (1 point)
Parcourez le tableau pour savoir si le nombre se trouve dans le tableau et confirmez la réponse à l’usager. (5 points) */


let tabChance=[];
let nbFois=0;

for(let i=0;i<100;i++){
    tabChance.push(Math.floor(Math.random() * 200) + 1);
}
let nbUser=Number(prompt("Un nombre entre 1 et 200"));
for(let i=0;i<tabChance.length;i++){
    if(tabChance[i]===nbUser){
        nbFois++
    }
}
if(nbFois!==0){
    alert("Oui, il y a "+nbFois+" fois le nombre "+nbUser)
}
else if(nbFois===0){
    alert("Non, il n'y a pas le nombre "+nbUser+" dans le tableau")
}
