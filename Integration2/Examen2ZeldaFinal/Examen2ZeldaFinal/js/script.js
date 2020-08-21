/** MAIN JS / Examen 2 / Franck Gallard / Dernière mise à jour: 19 juin 2020 */


/** ------ Filtre de trie de la liste des jeux ------ */
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


/** ----- PieChart ----- */
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Breath of the Wild', 19.08],
        ['Ocarina of Time', 13.22],
        ['Link\'s Awakening', 10.24],
        ['Twilight Princess', 9.96],
        ['Autres', 48.85]
    ]);

    var options = {'title':'Copies vendues', 'height':400};

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}


/** ----- GeoChart ----- */
google.charts.load('current', {
    'packages':['geochart'],
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['japan', 1000],
        ['United States', 1000],
        ['Canada', 400],
        ['Mexico', 200],
        ['Australia', 200],
        ['France', 800],
        ['UK', 500],
        ['Italy', 500],
        ['Germany', 500],
        ['RU', 200],
        ['Brazil', 0]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}


/** ---- Animations AOS ---- */
AOS.init({ delay:300 });



