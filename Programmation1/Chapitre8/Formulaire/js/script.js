
$('#inlineRadio1').click(function(){
    $('#Yoda, #divYoda').show();
});

$('#inlineRadio2').click(function(){
    $('#Spider, #divSpider').show();
    $('#Yoda, #divYoda').hide();
});

$('#inlineRadio3').click(function(){
    $('#batMan, #divBatMan').show();
    $('#Spider, #divSpider').hide();
});

$('#reset').click(function(){
   $('#Yoda, #divYoda, #Spider, #divSpider, #batMan, #divBatMan').hide();
});



$('form').keydown(function(){
        if ($('#usager').val().length >= 4) {
            $('#valide').css({color: '#008544'}).fadeIn('fast');
            $('#valide').css({color: '#008544'}).text('Valide');
            $('#nonDispo').css({color: 'red'}).fadeOut('fast');
        }
        else {
            $('#nonDispo').css({color: 'red'}).fadeIn('fast');
            $('#nonDispo').css({color: 'red'}).text('Nom Usager non disponible');
        }
});