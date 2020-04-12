//
// let $premierClique = true;
//
// // $('.img-fluid').hover(function(){
// //     if (!$premierClique) {
// //        $(this).click(function(){
// //            $(this).attr('src', 'images/4.jpg');
// //        });
// //        $premierClique = true
// //     }
// //
// //     else {
// //         $(this).click(function(){
// //             $(this).attr('src', 'images/9.jpg');
// //         });
// //         $premierClique = false
// //     }
// // });
//
// $('.img-fluid').hover(function(){
//
//     if ($premierClique) {
//         $('#image1').click(function(){
//             $(this).attr('src', 'images/9.jpg');
//         });
//         $premierClique = true
//     }
//
//     if ($premierClique) {
//         $('#image2').click(function(){
//             $(this).attr('src', 'images/5.jpg');
//         });
//         $premierClique = true
//     }
//
//     if ($premierClique) {
//         $('#image3').click(function(){
//             $(this).attr('src', 'images/3.jpg');
//         });
//         $premierClique = true
//     }
//
//     if ($premierClique) {
//         $('#image4').click(function(){
//             $(this).attr('src', 'images/7.jpg');
//         });
//         $premierClique = true
//     }
//
//     if ($premierClique) {
//         $('#image5').click(function(){
//             $(this).attr('src', 'images/6.jpg');
//         });
//         $premierClique = true
//     }
//
//     if ($premierClique) {
//         $('#image6').click(function(){
//             $(this).attr('src', 'images/1.jpg');
//         });
//         $premierClique = true
//     }
//
//     if ($premierClique) {
//         $('#image7').click(function(){
//             $(this).attr('src', 'images/2.jpg');
//         });
//         $premierClique = true
//     }
//
//     if ($premierClique) {
//         $('#image8').click(function(){
//             $(this).attr('src', 'images/8.jpg');
//         });
//         $premierClique = true
//     }
// });

// $('#boutonRecommencer').click(function(){
//     if (!$premierClique) {
//         $('.img-fluid').attr()
//     }
// });

// $('#boutonTricher').click(function(){
//     if ($premierClique) {
//         $('#image1').click(function(){
//             $(this).attr('src', 'images/9.jpg');
//         });
//         $premierClique = true
//     }
//
//     if ($premierClique) {
//         $('#image2').click(function(){
//             $(this).attr('src', 'images/5.jpg');
//         });
//         $premierClique = true
//     }
// });

let premierClick = true;
let idImage1;
let idImage2;
let srcImage1;
let srcImage2;

$('.img-fluid').click(function(){
    if(premierClick) {
       idImage1 = $(this).attr('id');
        srcImage1 = $(this).attr('src');
        premierClick = false;
    }

    else {
        idImage2 = $(this).attr('id');
        srcImage2 = $(this).attr('src');

        $('#' + idImage1).attr('src', srcImage2);
        $('#' + idImage2).attr('src', srcImage1);
        premierClick = true;
        Victoire ();
    }
});

function Victoire () {
    let Victoire = true;

    for (let i = 1; i <= 9; i++) {
        if ($('#Bill' + i).attr('src') === 'images/BillGates'+ i +'.jpg' ) {
            Victoire = true;
        }
        else {
            Victoire = false;
            break;
        }
    }
}

$('#boutonRecommencer').click(function(){
    window.location.reload();
});


