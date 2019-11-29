
// Donnez le résultat du programme suivant, en affectant aux variables A, B, C les valeurs suivantes:

// Première trace:
//
// A  =  5
// B  =  5
// C  =  0

// Deuxième trace:

// A  =  2
// B  =  2
// C  =  5


// RÉPONSE:

// var a = 5;
// var b = 5;
// var c = 0;

var a = 2;
var b = 2;
var c = 5;

var reponse = "";

if(a === b){
    reponse+= "1 ";
    if(b <= (a+c)){
        reponse+="2 ";
    }
    else if((a+b) < c){
        reponse+="3 ";
    }
    else{
        reponse+="4 ";
    }
}
else{
    reponse+="5 ";
}
if(a === b && b === a){
    reponse+="6 ";
}
else{
    reponse+="7 ";
}
alert(reponse);


