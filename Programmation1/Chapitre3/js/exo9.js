
/* Transférer les valeurs celcius de 10 à 20 en fareinheit par tranche de 1
(c * (9/5)) + 32; */

var fareinheits;

for (var celcius = 10; celcius <= 20; celcius++) {
    fareinheits = (celcius * (9/5)) + 32;
    document.write (celcius + ' celcius = ' + fareinheits.toFixed(2) + ' fareinheits <br>');
}


