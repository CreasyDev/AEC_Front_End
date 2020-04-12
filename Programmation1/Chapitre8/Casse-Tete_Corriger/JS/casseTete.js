let premierClick = true;
let idImage1;
let idImage2;
let srcImage1;
let srcImage2;

$('.img-fluid').click(function() {
   if(premierClick){
       idImage1 = $(this).attr("id");
       srcImage1 = $(this).attr("src");
       premierClick = false;
   }
   else{
       idImage2 = $(this).attr("id");
       srcImage2 = $(this).attr("src");

       $("#" + idImage1).attr("src",srcImage2);
       $("#" + idImage2).attr("src",srcImage1);
       premierClick = true;
       Victoire();
   }

});

function Victoire(){
    let victoire =true;
    for(let i=1; i<=9; i++){
        if ($("#image" + i).attr("src") === "images/"+i+".jpg"){
            victoire = true;
        }
        else{
            victoire = false;
            break;
        }
    }
}























$('#boutonRecommencer').click(function() {
    $('body').prepend("<img src='images/victoire.jpg' id='demoOn'>");
});

// $('#demoOn').click(function() {
//     alert("YAHOO");
// });









 $(document).on('click', '#demoOn', function(){
     alert();
 });
