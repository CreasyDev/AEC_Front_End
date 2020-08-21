/**
 * Created by Shany on 2018-05-15.
 */


$( "#boutonSW" ).click(function() {
    var couleur = $('.jaune').css("background-color");
    if(couleur === "rgb(128, 189, 255)")
        $('.jaune').css("background-color" , "#666666");
    else
        $('.jaune').css("background-color" , "rgb(128, 189, 255)");
});

