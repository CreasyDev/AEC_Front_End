import React from 'react';
import { Form, Navbar, InputGroup, FormControl, Image, Dropdown, ButtonGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Albums from './components/albums/Albums'
import AlbumPage from './components/albumPage/AlbumPage';
import MusicPage from './components/musicPage/MusicPage';

const initialAlbumList = [
    {
        title:'RAIGN',
        artiste:'Rachel Rabin',
        year: '2018',
        listeningTime: 20,
        musics:[
            {   
                title: "When It's All Over",
                paroles: "Deep into the darkness<br/>We all got lost Caught out in the rain storm<br/>Bullets falling fast<br/>Calling to the afterlife Can you hear us when we cry<br/>Call out to the afterlife<br/>Can you show us how to fight<br/> It's all gone wrong<br/>Heaven hold us<br/> We've lost the sun<br/>Heaven told us <br/> The world was strong <br/>Heaven hold us" 
            },
            {
                title: "Kiss Me a Thousand Times",
            },
            {
                title: "Walk on Fire",
            },
            {
                title: "Heaven Help Me",
            },
            {
                title: "Shine",
            },
            {
                title: "Don't Let Me Go - Acoustic",
            },
        ],
        photoSrc:'assets/img/album-photos/RachelRabin.jpg',
    },
    {
        title:'Spirit',
        artiste:'Khalid',
        year: '2010',
        listeningTime: 89,
        musics:[
            {
                title: "Better",
                paroles: "Love to see you shine in the night like the diamond you are<br/> (Love to see you shine in the night like the diamond you are).<br/> I'm on the other side, it's alright,<br/> just hold me in the dark <br/> (I'm on the other side, it's alright, just hold me in the dark)<br/> No one's got to know what we do, hit me up when you're bored<br/> (No one's got to know)<br/> Nah (what we do, hit me up when you're bored)<br/> Cause I live down the street, so we meet when you need it,<br/> it's yours All I hear is<br/> Nothin feels better than this<br/> Nothin feels better<br/> Nothin feels better than this<br/> Nothin feels better, no, no<br/> We don't gotta hide<br/> This is what you like, I admit<br/> Nothin feels better than this<br/> You say we're just friends but I swear when nobody's around<br/> You say we're just friends but I swear when…",
            },
            {
                title: "Bad Luck",
            },
            {
                title: "My Bad",
            },
            {
                title: "Intro",
            },
            {
                title: "Talk",
            },
            {
                title: "Right Back",
            },
            {
                title: "Don't Pretend (featuring Safe)",
            },
            {
                title: "Paradise",
            },
            {
                title: "Hundred",
            },
            {
                title: "Outta My Head (with John Mayer)",
            },
            {
                title: "Free Spirit",
            },
            {
                title: "Twenty One",
            },
            {
                title: "Bluffin",
            },
            {
                title: "Self",
            },
            {
                title: "Alive",
            },
            {
                title: "Heaven",
            },
            {
                title: "Saturday Nights (bonus track)",
            }
        ],
        photoSrc:'assets/img/album-photos/Khalid.jpg',
    },
    {
        title:'True Romance',
        artiste:'Estelle',
        year: '2014',
        listeningTime: 108,
        musics:[
            {
                title: "Time After Time",
            },
            {
                title: "Conqueror",
            },
            {
                title: "Something Good",
            },
            {
                title: "Make Her Say",
            },
            {
                title: "Time Share",
            },
            {
                title: "The Same",
            },
            {
                title: "Fight for It",
            },
            {
                title: "Silly Girls",
            },
            {
                title: "Gotcha Love",
            },
            {
                title: "She Will Love",
            },
            {
                title: "All That Matters",
            }
        ],
        photoSrc:'assets/img/album-photos/Estelle.jpg'
    },
    {
        title:'PHOENIX',
        artiste:'Rita Ora',
        year: '2014',
        listeningTime: 108,
        musics:[
            {   
                title: "Anywhere",
            },
            {
                title: "Let You Love Me",
            },
            {
                title: "New Look",
            },
            {
                title: "Lonely Together",
            },
            {
                title: "Your Song",
            },
            {
                title: "Only Want You",
            },
            {
                title: "First Time High",
            },
            {
                title: "For You",
            },
            {
                title: "Summer Love",
            },
            {
                title: "Girls",
            },
            {
                title: "Keep Talking",
            },
            {
                title: "Hell of a Life",
            }
        ],
        photoSrc:'assets/img/album-photos/RitaOra.jpg',
    },
    {
        title:'Love in the Future',
        artiste:'John Legend',
        year: '2014',
        listeningTime: 188,
        musics:[
            {   
                title: "Love in the Future (Intro)",
            },
            {
                title: "The Beginning...",
            },
            {
                title: "Open Your Eyes",
            },
            {
                title: "Made to Love",
            },
            {
                title: "Who Do We Think We Are (featuring Rick Ross)",
            },
            {
                title: "All of Me",
            },
            {
                title: "Hold on Longer",
            },
            {
                title: "Save the Night",
            },
            {
                title: "Tomorrow",
            },
            {
                title: "What If I Told You? (Interlude)",
            },
            {
                title: "Dreams",
            },
            {
                title: "Wanna Be Loved",
            },
            {
                title: "Angel (Interlude) (featuring Stacy Barthe)",
            },
            {
                title: "You & I (Nobody in the World)",
            },
            {
                title: "Asylum",
            },
            {
                title: "Caught Up",
            }
        ],
        photoSrc:'assets/img/album-photos/JohnLegend.jpg',
    },
    {
        title:'En vérité',
        artiste:'Isabelle Boulay',
        year: '2009',
        listeningTime: 237,
        musics:[
            {   
                title: "Mon amour (la supplique)",
            },
            {
                title: "Tout sera pardonné",
            },
            {
                title: "Won't Catch Me Cryin",
            },
            {
                title: "La route avec lui",
            },
            {
                title: "Nashville",
            },
            {
                title: "Una storia d'amore",
            },
            {
                title: "Un souvenir",
            },
            {
                title: "Le garçon triste",
            },
            {
                title: "Toi moi nous",
            },
            {
                title: "Voir la mer",
            },
            {
                title: "Les mains d'or",
            },
            {
                title: "En vérité",
            },
            {
                title: "Le train d'après",
            },
            {
                title: "Guerre civile",
            }
        ],
        photoSrc:'assets/img/album-photos/IsabelleBoulay.jpg',
    }
];

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            currentPageName: "Albums",
            currentPage: "albums",
            currentAlbum: null,
            albumTitle: null,
            musicTitle: null,
            musicParoles: null,
            albumPhotoSrc: null,
            searchValue: null,
            isMakingSearch: false,
            albumList: initialAlbumList
        };

        this.setAlbumPage = this.setAlbumPage.bind(this);
        this.setMusicPage = this.setMusicPage.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
        this.handleGoNext = this.handleGoNext.bind(this);
        this.handleSearchValue = this.handleSearchValue.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    setAlbumPage = (album) => {
        this.setState({
            currentAlbum : album,
            currentPage : 'album-page',
            currentPageName: 'Album',
        }) 
    }

    setMusicPage = (albumTitle, musicTitle, musicParoles, albumPhotoSrc) => {
        this.setState({
            albumTitle:albumTitle,
            musicTitle:musicTitle,
            musicParoles:musicParoles,
            albumPhotoSrc:albumPhotoSrc,
            currentPage : 'music-page',
            currentPageName: 'Chanson' 
        })
    }

    handleGoBack = () => {
        // On gère la bonne page à afficher lors du click sur le button retour
        const currentPage = this.state.currentPage; 
        let pageToShow = this.state.currentPage;
        let pageNameToShow = this.state.currentPageName;
        if(currentPage === "album-page") {
            pageToShow = "albums";
            pageNameToShow = "Albums";           
        } else if(currentPage === "music-page") {
            pageToShow = "album-page";
            pageNameToShow = "Album";
        } 

        this.setState({
            currentPage: pageToShow,
            currentPageName: pageNameToShow
        }) 
    }

    handleGoNext = () => {
        // rien à faire dans le contexte de ce TP
    }

    handleSearchValue = (event) => {
        this.setState({searchValue : event.target.value})
    }

    handleSearch = (event) => {
        event.preventDefault();
        let searchValue = this.state.searchValue;
        let albumsFound = initialAlbumList;
        if(searchValue) {
            searchValue = searchValue.toUpperCase();
            albumsFound = initialAlbumList.filter(album => RegExp(searchValue).test(album.title.toUpperCase()) || RegExp(searchValue).test(album.artiste.toUpperCase()));
        }

        this.setState({
            albumList: albumsFound
        })
    } 

    renderHeader(){
        return (
            <div className="albums-header">
                <Navbar className="justify-content-between ">
                <Form onSubmit={this.handleSearch} inline>
                    <FontAwesomeIcon className="marginRight10px activatedColor cursorPointer" icon={faChevronLeft} onClick={this.handleGoBack} inverse/>
                    <FontAwesomeIcon className="marginLeft10px notActivatedColor cursorPointer" icon={faChevronRight} onClick={this.handleGoNext} />
                    <InputGroup className="search-album-container">
                    <FormControl
                        placeholder="Rechercher"
                        aria-label="Rechercher"
                        onChange= {this.handleSearchValue}
                    />
                    </InputGroup>
                </Form>
                <Form className="user-profil" inline>
                    <Image src="assets/img/user-profil-photo.jpg" roundedCircle />
                    <Navbar.Text>
                        Franck
                    </Navbar.Text>
                    <Dropdown as={ButtonGroup} alignRight>
                    <Dropdown.Toggle split id="dropdown-split-basic" className="userProfileActions"/>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={this.props.logout}>Déconnexion</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Form>
                </Navbar>
                <div className="albums-header-title">
                <h1>{this.state.currentPageName}</h1>
                </div>
            </div>
        )
    }

    renderBody(){
        // On retourne la page appropriée à afficher
        const currentPage = this.state.currentPage;
        if(currentPage === "albums" ) {
            return <Albums albumList = {this.state.albumList} setAlbumPage={this.setAlbumPage}/>
        } else if(currentPage === "album-page"){
            return <AlbumPage setMusicPage={this.setMusicPage} albumData={this.state.currentAlbum}/>
        } else if(currentPage === "music-page"){
            return <MusicPage albumTitle={this.state.albumTitle} musicTitle={this.state.musicTitle} musicParoles={this.state.musicParoles} albumPhotoSrc={this.state.albumPhotoSrc}/>
        } 
    }

    render() {
        return (
            <div className="albums-container">
                {this.renderHeader()}
                <div className="whiyteLineSeparator"></div>
                {this.renderBody()}
            </div>
        )
    }
}

export default Main;
