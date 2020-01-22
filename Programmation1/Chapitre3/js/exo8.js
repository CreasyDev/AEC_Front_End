
/* Transférer les valeurs Fahrenheit de -40 à 40 en Celsius par tranche de 5.
 (Celsius = 5/9(fahrenheit-32)) */

var celcius;

for(var fahrenheits = -40 ; fahrenheits <= 40; fahrenheits+=5){
    celcius = (5/9) * (fahrenheits - 32);
    document.write(fahrenheits + " Fahrenheits = " + celcius.toFixed(2) + " Celcius<br>");
}
