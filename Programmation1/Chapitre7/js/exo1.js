
/* Créez une classe JoueurHockey.
nom
nbButs
nbPasses

Instanciez :
Sydney Crosy 454 buts 787 passes
Mario Lemieux 690 buts 1033 passes
Jaromir Jagr 766 buts 1155 passes

Créez une méthode nommée Total qui retourne le nombre de points (buts + passes)

Créez une classe Equipe qui contient 3 joueurs

Instanciez votre équipe avec vos 3 joueurs

Créez une méthode qui s’appelle AfficherAlignement() qui affiche tous les joueurs d’une équipe.

Créez une méthode qui s’appelle AfficherPointsTotaux() qui affiche le total de points de 3 joueurs de l’équipe. */


class JoueurHockey{
    constructor(nom,nbButs,nbPasses){
        this.nom = nom;
        this.nbButs = nbButs;
        this.nbPasses = nbPasses;
    }

    TotalPoints(){
        //On peut utiliser return pour accéder à la valeur ou l'afficher
        //document.write(this.nbButs + this.nbPasses);
        return (this.nbButs+ this.nbPasses);
    }
}

class Equipe{

// j1 j2 j3 pour bien identifier la différence entre la propriété(this.joueur1) //et les paramètres de la méthode. ICI j1 représente l’objet SydneyCrosby
    constructor(nom,j1,j2,j3){
        this.nom = nom;
        this.joueur1 = j1;
        this.joueur2 = j2;
        this.joueur3 = j3;
    }

    GrandTotalPoints(){
        return (this.joueur1.TotalPoints() + this.joueur2.TotalPoints() + this.joueur3.TotalPoints());
    }

    AfficherAlignement(){
        document.write(this.joueur1.nom + " " + this.joueur2.nom + " " + this.joueur3.nom);
    }
}

let SydneyCrosby = new JoueurHockey("Sydney Crosby",454,787);
let MarioLemieux = new JoueurHockey("Mario Lemieux",690,1033);
let JaromirJagr = new JoueurHockey("Jaromir Jarg",766,1155);

document.write(SydneyCrosby.TotalPoints() + " points <br>");

let pingouins = new Equipe("Pingouins de Pittsburgh",SydneyCrosby,MarioLemieux,JaromirJagr);
document.write(pingouins.GrandTotalPoints() + " points pour les " + pingouins.nom + "<br>");
pingouins.AfficherAlignement();


