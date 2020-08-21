
import React from 'react';

import { Categorie } from '../Categorie/Categorie';


export class Catalogue extends React.Component {


    render() {
        return (
            <>

                <Categorie nom="Supense" />
                <Categorie nom="Humour" />
                <Categorie nom="Séries américaines" />
                <Categorie></Categorie>
                <Categorie />
                <Categorie />
            </>

        )
    }
}


