$('#titreHello').html("Hello jQuery World!!!");

$('#titreHello').css("color","red");



$( "#image1" ).click(function() {
    var nomImage = $('#image1').attr("src");
    alert(nomImage);
    if(nomImage === "medias/bg.jpg")
    {
        $('#image1').attr("src","medias/sw.jpg");
    }
    else
        $('#image1').attr("src","medias/bg.jpg");


});










