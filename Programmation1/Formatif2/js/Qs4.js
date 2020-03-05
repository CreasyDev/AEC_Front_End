
/* Question 4 : Chapitre 6 (les objets) (20 points)

Créez une classe MonnaieVirtuelle. (1 point)

Une MonnaieVirtuelle a les propriétés suivantes :

nomMonnaie (exemple : Bitcoin, Ethereum, Litecoin) (1 point)
valeurEnUSD (exemple 1 Bitcoin = 9730$) (1 point)
actif (vous avez 2 Bitcoins) (1 point)
actifUSD (2 bitCoins = 2*9730) (1 point)

Votre constructeur doit prendre en paramètres nomMonnaie, valeurEnUSD et actif et calculer automatiquement actifUSD. (3 points)
_______________________________________________________________________

Créez une classe Portefeuille. (1 point)

Un Portefeuille a les propriétés suivantes :

nomProprietaire (exemple : Shany Carle) (1 point)
tableauMonnaies (un tableau de plusieurs MonnaieVirtuelle) (1 point)

Une méthode nommée ValeurDuPortefeuille() qui explore le tableau tableauMonnaies et retourne le total de tous les actifUSD. (4 points)

_______________________________________________________________________


Instanciez les monnaies suivantes :
nomMonnaie = Bitcoin, valeurEnUSD = 9730, actif = 6 (1 point)
nomMonnaie = Ethereum, valeurEnUSD = 194, actif = 20 (1 point)
nomMonnaie = Litecoin, valeurEnUSD = 58, actif = 10  (1 point)

Instanciez le portefeuille suivant :
Shany Carle, un tableau qui contient toutes les monnaies précédentes. (1 point)
Faites afficher la valeur de mon portefeuille. (1 point) */


class MonnaieVirtuelle {
    constructor(nomMonnaie,valeurEnUSD,actif){
        this.nomMonnaie=nomMonnaie;
        this.valeurEnUSD=valeurEnUSD;
        this.actif=actif;
        this.actifUSD=this.actif*this.valeurEnUSD;
    }
}
class Portefeuille{
    constructor(nomProprietaire,tableauMonnaies){
        this.nomProprietaire=nomProprietaire;
        this.tableauMonnaies=tableauMonnaies;
    }
    ValeurDuPortefeuille(){
        let valeur=0;
        for(let j=0;j<this.tableauMonnaies.length;j++){
            valeur+=(this.tableauMonnaies)[j].actifUSD
        }
        return valeur
    }
}
let monnaie1=new MonnaieVirtuelle("Bitcoin",9730,6);
let monnaie2=new MonnaieVirtuelle("Ethereum",194,20);
let monnaie3=new MonnaieVirtuelle("Litecoin",58,10);
let tab=[monnaie1,monnaie2,monnaie3];
let proprio=new Portefeuille("Shany Carle",tab);
document.write("La valeur du portefeuille de "+proprio.nomProprietaire+" est de "+proprio.ValeurDuPortefeuille()+"$ USD");

