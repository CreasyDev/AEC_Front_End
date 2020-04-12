/** MAIN JS / Projet Final JQuery / Par Franck Gallard / Dernière mise à jour le 12 Avril 2020 */


        /** --------- VARIABLES --------- */

        let mot;
        let nombreCaracteres;
        let typeCol;
        let html;

        /** --------- FONCTIONS --------- */

        /** Remplacement des accents */
        function removeAccents(mot) {
            let map = {
                '-': ' ',
                '-': '_',
                'a': 'á|à|ã|â|À|Á|Ã|Â',
                'e': 'é|è|ê|É|È|Ê',
                'i': 'í|ì|î|Í|Ì|Î',
                'o': 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
                'u': 'ú|ù|û|ü|Ú|Ù|Û|Ü',
                'c': 'ç|Ç',
                'n': 'ñ|Ñ'
            };
            mot = mot.toLowerCase();
            for (let pattern in map) {
                mot = mot.replace(new RegExp(map[pattern], 'g'), pattern);
            };
            console.log('Mot modifié: ' + mot);
            return mot;
        };

        /** Compte le nombre de caracteres et détermine le type de colonne Bootstrap à utiliser */
        function compteCaracteres(mot) {
            nombreCaracteres = mot.length;
            if (nombreCaracteres < 3) {
                $('#message-erreur').text('Veuillez entrer au moins 3 caractères').css({'color': 'red', 'font-weight': 'bold'});
                $('#resultat, #choix-couleur-bg').css( "display", 'none' );
            }
            if (nombreCaracteres > 12) {
                $('#message-erreur').text('Veuillez entrer qu\'un maximum de 12 caractères').css({'color': 'red', 'font-weight': 'bold'});
                $(this).
                $('#resultat, #choix-couleur-bg').css( 'display', 'none' );
            }
            if (nombreCaracteres >= 3 && nombreCaracteres <= 12) {
                $('#message-erreur').text('');
                if ( nombreCaracteres === 4 ) { typeCol = '3' }
                else if ( nombreCaracteres === 5 ) { typeCol = '2' }
                else if ( nombreCaracteres === 6 ) { typeCol = '2' }
                else if ( nombreCaracteres >= 7 ) { typeCol = '1' }
                else { typeCol = '4' }
                console.log('Type de colonne: ' + typeCol);
                $('#resultat, #choix-couleur-bg').css( "display", 'block' );
                $('#montagePhoto').css({display: 'none'});
            }
        };

        /** Séparation des caractères et création des colonnes HTML */
        function separationCaracteres(mot) {
            html = '';
            for (let i = 0; i < mot.length; i++) {
                let lettre = mot.charAt(i);
                if ( !lettre.match(/[a-z]/i) && lettre !== '*' ) {
                    $('#message-erreur').text('Veuillez entrer seulement des lettres').css({'color': 'red', 'font-weight': 'bold'});
                    $('#resultat, #choix-couleur-bg').css( "display", 'none' );
                    $('#montagePhoto').css({display: 'block'});
                }
                else if (lettre === '*') {
                    html += '<div class="lettre col-sm-' + typeCol + '"><img src="images/Letters/CS/CS1.jpg" /></div>';
                }
                else {
                    html += '<div class="lettre col-sm-' + typeCol + '"><img src="images/Letters/' + mot.charAt(i) + '/' + mot.charAt(i) + '1' + '.jpg" /></div>';
                }
            }
            console.log('contenu html: ' + html);
        };


        /** --------- ACTIONS --------- */

        /** Désactive le comportement normal du bouton "Go" */
        $('#formulaire').bind('submit', function (e) {
            e.preventDefault();
        });

        /** Affiche le résultat lorsque le bouton "Go" est cliqué */
        $('#buttonGo').click(function () {
            let mot = $('#inputMot').val();
            console.log('Mot original: ' + mot);
            mot = removeAccents(mot);
            compteCaracteres(mot);
            separationCaracteres(mot);
            $("#resultat > #lettres").html(html);
        });

        /** Choix de la couleur du background */
        $('#choix-couleur-bg a').click(function () {
            let bg = $(this).attr('couleur');
            $('#lettres').css( "background-image", 'url(images/background/' + bg + '.jpg)' );
        });


        /** La seule zone qui doit apparaitre à l'impression */
        function impressionElement() {
            Element = '#resultat';
            $('*').addClass('d-none-print');
            $(Element+' *').removeClass('d-none-print');
            $(Element).removeClass('d-none-print');

            parent =  $(Element).parent();
            while($(parent).length)
            {
                $(parent).removeClass('d-none-print');
                parent =  $(parent).parent();
            }
        }
        impressionElement();


