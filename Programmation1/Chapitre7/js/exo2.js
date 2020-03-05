
/* Créez une classe Cylindre qui contient deux propriétés :
une hauteur et un rayon.

La classe Cylindre doit contenir une méthode GetVolume() qui retourne son volume.

Créez 2 cylindres avec les valeurs de votre choix et testez votre méthode GetVolume().

Créez une classe Boite qui contient un tableau de Cylindres.

Remplissez la boîte de 5 cylindres de votre choix.

Créez une méthode GetVolumeBoite() qui permet d’afficher le volume total des 5 cylindres. */


class Cylindre{
    constructor(hauteur,rayon){
        this.hauteur = hauteur;
        this.rayon = rayon;

    }

    GetVolume(){
        //pi x rayon² x hauteur
        return Math.PI * Math.pow(this.rayon,2) * this.hauteur;
    }
}

class Boite{
    constructor(tabCylindres){
        this.tabCylindres = tabCylindres;
    }

    GetVolumeBoite(){
        let volumeTotal = 0;
        for(let i=0;i<tabCylindres.length;i++){
            volumeTotal += tabCylindres[i].GetVolume();
        }
        return volumeTotal;
    }
}

document.body.innerHTML = "";
let monCylindre = new Cylindre(10,3);
let volume = monCylindre.GetVolume();
document.write(volume);

//MON 2E CYLINDRE
let mon2Cylindre = new Cylindre(11,5);
let volume2 = mon2Cylindre.GetVolume();
document.write("<br>" + volume2);

let mon3Cylindre = new Cylindre(44,3);
let mon4Cylindre = new Cylindre(33,2);
let mon5Cylindre = new Cylindre(22,3);

let tabCylindres = [monCylindre,mon2Cylindre,mon3Cylindre,mon4Cylindre,mon5Cylindre];

let maBoite = new Boite(tabCylindres);
let volumeTotalDeLaMort = maBoite.GetVolumeBoite();

document.write("<br>" + volumeTotalDeLaMort + " unités cubes");









