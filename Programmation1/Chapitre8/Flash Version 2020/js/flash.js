


$('#boutonGauche').click(function(){
    $('#flashID').css('left', '300px');
});

$('#boutonDroite').click(function(){
    $('#flashID').css('left', '600px');
});

$('#boutonChangerImage').click(function(){
    $('#flashID').attr('src', 'img/Flash2.png');
});

$('#boutonEnleverImage').click(function(){
    $('#flashID').remove();
});

$('#boutonAjouterImage').click(function(){
    $('body .centralCity').append("<img id=\"flashID\" class=\"flashClass\" src=\"img/Flash1.png\" alt=\"image de Flash1\" width=\"200px\"/>");
});

$('#boutonAjouterAttribut').click(function(){
    $('#flashID').attr('alt', 'Mon Super Hero c\'est Flash !');
});

$('#boutonAjouterTitre').click(function(){
    $('body .h-75').prepend('<h1 class="text-white">JUSTICE LEAGUE</h1>');
});

$('#boutonDupliquer').click(function(){
    $('#flashID').clone().prependTo('#div2');
});

$('#boutonRalentir').click(function(){
    $('#flashID').remove().delay(13000);
});

$('#boutonTeleport').click(function(){
    $('#flashID').animate({bottom: '600px'}).delay(13000);
});


// ---------------------------------------------------------- //

// let monTimer;
// let vitesseSupreme = false;
//
// $( "#boutonVitesseSupreme" ).click(function() {
//
//     if(!vitesseSupreme){
//         monTimer  = setInterval(function(){
//             $("#flashID").toggle()
//         }, 500);
//         vitesseSupreme = true;
//     }
// });
//
//
// $( "#boutonFinVitesseSupreme" ).click(function() {
//     clearInterval(monTimer);
//     vitesseSupreme = false;
//     $("#flashID").show();
// });


// $('#boutonFinVitesseSupreme').click(function(){
//     $('#flashID').stop();
// });

// ---------------------------------------------------- //

    // let Interval;
    // let compteur = false;
    //
    // $('#boutonVitesseSupreme').click(function(){
    //     if (!compteur) {
    //         Interval = setInterval(function(){
    //             $('#flashID').fadeToggle();
    //             compteur = true;
    //         }, 500);
    //     }
    // });
    //
    // $('#boutonFinVitesseSupreme').click(function(){
    //     clearInterval(Interval);
    //     compteur = false;
    //     $('#flashID').show();
    // });



    let IntervalImg;
    let animation = false;

    $('#boutonVitesseSupreme').click(function(){
       if (!animation) {
           IntervalImg = setInterval(function(){
              $('#flashID').fadeToggle();
           }, 500);
           animation = true;
       }
       else {
           clearInterval(IntervalImg);
           animation = false;
           $('#flashID').show();
       }
    });


    $('#boutonNuke').click(function(){
       if ($('.centralCity').css('background-image', 'url(img/explosion.jpg)').fadeIn('slow').css(
            'background-image', 'url(img/explosion.jpg)').fadeOut('slow')) {
       }
        // $('.btn, h1, #flashID').remove();

    });


    /* sortir les boutons du parent  caché. Faire Append directement sur le body */

    $('#boutonPerso1').click(function(){
        $('.centralCity').css('background-image', 'url(img/centralCity.jpg)').fadeIn('slow');
        $('.btn, h1').append();
    });


    $('#boutonPerso2').click(function(){
        $('#flashID').animate({
            left: '700px',
            opacity: 0.25,
        }, 3000).animate({
            width: '400px',
            height: '900px',
            opacity: 1
        }, 3000).animate({
            opacity: 1,
            width: '200px',
            height: '200px'
        }, 3000).animate({
            left: '100px',
        }, 3000);
    });






