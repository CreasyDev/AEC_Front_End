(this.webpackJsonpspotify=this.webpackJsonpspotify||[]).push([[0],{48:function(e,t,a){e.exports=a(68)},53:function(e,t,a){},54:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(18),i=a.n(r),s=(a(53),a(54),a(55),a(10)),o=a(11),c=a(8),u=a(13),m=a(12),h=a(80),d=a(39),b=a(73),g=a(81),p=a(77),v=a(42),E=a(75),f=a(79),y=a(78),N=a(14),k=a(15),w=a(41),O=a(74),S=a(82),C=(a(61),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).handleAlbumClick=function(){l.props.setAlbumPage(l.props.albumData)},l.state={showAlbumPage:!1,showAlbumOverLay:!1},l.handleAlbumClick=l.handleAlbumClick.bind(Object(c.a)(l)),l.showAlbumOverlay=l.showAlbumOverlay.bind(Object(c.a)(l)),l}return Object(o.a)(a,[{key:"showAlbumOverlay",value:function(e){this.setState({showAlbumOverLay:e})}},{key:"renderAlbumOverlay",value:function(){return n.a.createElement("div",{className:"overlay ablum-actions"},n.a.createElement(d.a,{variant:"outline-dark",className:"favorite"},n.a.createElement(N.a,{className:"marginRight10px activatedColor",icon:k.d,inverse:!0})),n.a.createElement(d.a,{variant:"outline-dark",className:"play"},n.a.createElement(N.a,{className:"marginRight10px activatedColor",icon:k.e})),n.a.createElement(d.a,{variant:"outline-dark",className:"more"},n.a.createElement(N.a,{className:"activatedColor",icon:k.c,inverse:!0})))}},{key:"renderAlbumCardContent",value:function(){var e=this,t=this.props.albumData.title,a=this.props.albumData.artiste,l=this.props.albumData.photoSrc,r=this.state.showAlbumOverLay;return n.a.createElement("div",null,n.a.createElement(S.a,{className:"album-container cursorPointer",onMouseEnter:function(){return e.showAlbumOverlay(!0)},onMouseLeave:function(){return e.showAlbumOverlay(!1)},onClick:this.handleAlbumClick},n.a.createElement(S.a.Img,{variant:"top",src:l}),n.a.createElement(S.a.Body,{className:"album-body"},n.a.createElement(S.a.Title,null,t),n.a.createElement(S.a.Text,null,a)),r&&this.renderAlbumOverlay()))}},{key:"render",value:function(){return this.renderAlbumCardContent()}}]),a}(n.a.Component)),L=(a(62),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={},l}return Object(o.a)(a,[{key:"renderBody",value:function(){var e=this,t=this.props.albumList;if(0===t.length)return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("h3",null,"Aucun resultat trouv\xe9 pour votre recherche..."));var a=t.map((function(t){return n.a.createElement(w.a,{sm:"6",md:"3"},n.a.createElement(C,{albumData:t,setAlbumPage:e.props.setAlbumPage}))}));return n.a.createElement(b.a,{fluid:!0},n.a.createElement(O.a,{className:"album-list"},a))}},{key:"render",value:function(){return n.a.createElement("div",{className:"albums-container"},this.renderBody())}}]),a}(n.a.Component)),A=a(76),P=(a(63),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={},l.handleMusic=l.handleMusic.bind(Object(c.a)(l)),l}return Object(o.a)(a,[{key:"handleMusic",value:function(e){var t=this.props.albumData,a=t.title,l=t.photoSrc,n=t.musics[e].title,r=t.musics[e].paroles;this.props.setMusicPage(a,n,r,l)}},{key:"render",value:function(){var e=this,t=this.props.albumData,a=t.title,l=t.artiste,r=t.year,i=t.listeningTime,s=t.musics?t.musics:[],o=t.musics?t.musics.length:0,c=t.photoSrc,u=s.map((function(t,a){return n.a.createElement("tr",{onClick:function(){return e.handleMusic(a)}},n.a.createElement("td",{className:"width60px"},a+1),n.a.createElement("td",{className:"width60px"},n.a.createElement(N.a,{className:"activatedColor",icon:k.d,inverse:!0})),n.a.createElement("td",{className:"textAlighLeft"},t.title))}));return n.a.createElement("div",{className:"album-page-container"},n.a.createElement(O.a,null,n.a.createElement(w.a,{sm:"12",md:"2"},n.a.createElement(E.a,{src:c,className:"album-page-img"})),n.a.createElement(w.a,{sm:"12",md:"10"},n.a.createElement("div",{className:"album-infos"},n.a.createElement("span",null,"ALBUM"),n.a.createElement("h1",null,a),n.a.createElement("span",null,"Par ",n.a.createElement("strong",{className:""},l)),n.a.createElement("label",null,r," . ",o," chansons, ",i," min"),n.a.createElement("div",{className:"album-actions"},n.a.createElement(d.a,{variant:"success",size:"sm",className:"play-btn"},"LECTURE"),n.a.createElement(d.a,{variant:"outline-dark",className:"round-btn"},n.a.createElement(N.a,{className:"marginRight10px activatedColor",icon:k.d,inverse:!0})),n.a.createElement(d.a,{variant:"outline-dark",className:"round-btn"},n.a.createElement(N.a,{className:"marginRight10px activatedColor",icon:k.c,inverse:!0})))))),n.a.createElement(O.a,{className:"music-list-container"},n.a.createElement(A.a,{hover:!0,variant:"dark",className:"music-list-container"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{className:"width60px"},"#"),n.a.createElement("th",{className:"width60px"}),n.a.createElement("th",{className:"textAlighLeft"},"TITRE"))),n.a.createElement("tbody",null,u))))}}]),a}(n.a.Component)),j=(a(64),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={},l}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"album-page-container"},n.a.createElement(O.a,null,n.a.createElement(w.a,{sm:"12",md:"2"},n.a.createElement(E.a,{src:this.props.albumPhotoSrc,className:"album-page-img"})),n.a.createElement(w.a,{sm:"12",md:"10"},n.a.createElement("div",{className:"album-infos"},n.a.createElement("span",null,"ALBUM"),n.a.createElement("h1",null,this.props.albumTitle),n.a.createElement("span",null,"CHANSON"),n.a.createElement("h4",null,this.props.musicTitle)))),n.a.createElement(O.a,{className:"music-list-container"},n.a.createElement(w.a,{sm:"12",md:"5"},n.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.props.musicParoles}}))))}}]),a}(n.a.Component));j.defaultProps={musicParoles:"Aucunes paroles trouv\xe9es pour cette chanson"};var T=j,M=[{title:"RAIGN",artiste:"Rachel Rabin",year:"2018",listeningTime:20,musics:[{title:"When It's All Over",paroles:"Deep into the darkness<br/>We all got lost Caught out in the rain storm<br/>Bullets falling fast<br/>Calling to the afterlife Can you hear us when we cry<br/>Call out to the afterlife<br/>Can you show us how to fight<br/> It's all gone wrong<br/>Heaven hold us<br/> We've lost the sun<br/>Heaven told us <br/> The world was strong <br/>Heaven hold us"},{title:"Kiss Me a Thousand Times"},{title:"Walk on Fire"},{title:"Heaven Help Me"},{title:"Shine"},{title:"Don't Let Me Go - Acoustic"}],photoSrc:"assets/img/album-photos/RachelRabin.jpg"},{title:"Spirit",artiste:"Khalid",year:"2010",listeningTime:89,musics:[{title:"Better",paroles:"Love to see you shine in the night like the diamond you are<br/> (Love to see you shine in the night like the diamond you are).<br/> I'm on the other side, it's alright,<br/> just hold me in the dark <br/> (I'm on the other side, it's alright, just hold me in the dark)<br/> No one's got to know what we do, hit me up when you're bored<br/> (No one's got to know)<br/> Nah (what we do, hit me up when you're bored)<br/> Cause I live down the street, so we meet when you need it,<br/> it's yours All I hear is<br/> Nothin feels better than this<br/> Nothin feels better<br/> Nothin feels better than this<br/> Nothin feels better, no, no<br/> We don't gotta hide<br/> This is what you like, I admit<br/> Nothin feels better than this<br/> You say we're just friends but I swear when nobody's around<br/> You say we're just friends but I swear when\u2026"},{title:"Bad Luck"},{title:"My Bad"},{title:"Intro"},{title:"Talk"},{title:"Right Back"},{title:"Don't Pretend (featuring\xa0Safe)"},{title:"Paradise"},{title:"Hundred"},{title:"Outta My Head (with\xa0John Mayer)"},{title:"Free Spirit"},{title:"Twenty One"},{title:"Bluffin"},{title:"Self"},{title:"Alive"},{title:"Heaven"},{title:"Saturday Nights (bonus track)"}],photoSrc:"assets/img/album-photos/Khalid.jpg"},{title:"True Romance",artiste:"Estelle",year:"2014",listeningTime:108,musics:[{title:"Time After Time"},{title:"Conqueror"},{title:"Something Good"},{title:"Make Her Say"},{title:"Time Share"},{title:"The Same"},{title:"Fight for It"},{title:"Silly Girls"},{title:"Gotcha Love"},{title:"She Will Love"},{title:"All That Matters"}],photoSrc:"assets/img/album-photos/Estelle.jpg"},{title:"PHOENIX",artiste:"Rita Ora",year:"2014",listeningTime:108,musics:[{title:"Anywhere"},{title:"Let You Love Me"},{title:"New Look"},{title:"Lonely Together"},{title:"Your Song"},{title:"Only Want You"},{title:"First Time High"},{title:"For You"},{title:"Summer Love"},{title:"Girls"},{title:"Keep Talking"},{title:"Hell of a Life"}],photoSrc:"assets/img/album-photos/RitaOra.jpg"},{title:"Love in the Future",artiste:"John Legend",year:"2014",listeningTime:188,musics:[{title:"Love in the Future (Intro)"},{title:"The Beginning..."},{title:"Open Your Eyes"},{title:"Made to Love"},{title:"Who Do We Think We Are (featuring\xa0Rick Ross)"},{title:"All of Me"},{title:"Hold on Longer"},{title:"Save the Night"},{title:"Tomorrow"},{title:"What If I Told You? (Interlude)"},{title:"Dreams"},{title:"Wanna Be Loved"},{title:"Angel (Interlude)\xa0(featuring\xa0Stacy Barthe)"},{title:"You & I (Nobody in the World)"},{title:"Asylum"},{title:"Caught Up"}],photoSrc:"assets/img/album-photos/JohnLegend.jpg"},{title:"En v\xe9rit\xe9",artiste:"Isabelle Boulay",year:"2009",listeningTime:237,musics:[{title:"Mon amour (la supplique)"},{title:"Tout sera pardonn\xe9"},{title:"Won't Catch Me Cryin"},{title:"La route avec lui"},{title:"Nashville"},{title:"Una storia d'amore"},{title:"Un souvenir"},{title:"Le gar\xe7on triste"},{title:"Toi moi nous"},{title:"Voir la mer"},{title:"Les mains d'or"},{title:"En v\xe9rit\xe9"},{title:"Le train d'apr\xe8s"},{title:"Guerre civile"}],photoSrc:"assets/img/album-photos/IsabelleBoulay.jpg"}],B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).setAlbumPage=function(e){l.setState({currentAlbum:e,currentPage:"album-page",currentPageName:"Album"})},l.setMusicPage=function(e,t,a,n){l.setState({albumTitle:e,musicTitle:t,musicParoles:a,albumPhotoSrc:n,currentPage:"music-page",currentPageName:"Chanson"})},l.handleGoBack=function(){var e=l.state.currentPage,t=l.state.currentPage,a=l.state.currentPageName;"album-page"===e?(t="albums",a="Albums"):"music-page"===e&&(t="album-page",a="Album"),l.setState({currentPage:t,currentPageName:a})},l.handleGoNext=function(){},l.handleSearchValue=function(e){l.setState({searchValue:e.target.value})},l.handleSearch=function(e){e.preventDefault();var t=l.state.searchValue,a=M;t&&(t=t.toUpperCase(),a=M.filter((function(e){return RegExp(t).test(e.title.toUpperCase())||RegExp(t).test(e.artiste.toUpperCase())}))),l.setState({albumList:a})},l.state={currentPageName:"Albums",currentPage:"albums",currentAlbum:null,albumTitle:null,musicTitle:null,musicParoles:null,albumPhotoSrc:null,searchValue:null,isMakingSearch:!1,albumList:M},l.setAlbumPage=l.setAlbumPage.bind(Object(c.a)(l)),l.setMusicPage=l.setMusicPage.bind(Object(c.a)(l)),l.handleGoBack=l.handleGoBack.bind(Object(c.a)(l)),l.handleGoNext=l.handleGoNext.bind(Object(c.a)(l)),l.handleSearchValue=l.handleSearchValue.bind(Object(c.a)(l)),l.handleSearch=l.handleSearch.bind(Object(c.a)(l)),l}return Object(o.a)(a,[{key:"renderHeader",value:function(){return n.a.createElement("div",{className:"albums-header"},n.a.createElement(g.a,{className:"justify-content-between "},n.a.createElement(h.a,{onSubmit:this.handleSearch,inline:!0},n.a.createElement(N.a,{className:"marginRight10px activatedColor cursorPointer",icon:k.a,onClick:this.handleGoBack,inverse:!0}),n.a.createElement(N.a,{className:"marginLeft10px notActivatedColor cursorPointer",icon:k.b,onClick:this.handleGoNext}),n.a.createElement(p.a,{className:"search-album-container"},n.a.createElement(v.a,{placeholder:"Rechercher","aria-label":"Rechercher",onChange:this.handleSearchValue}))),n.a.createElement(h.a,{className:"user-profil",inline:!0},n.a.createElement(E.a,{src:"assets/img/user-profil-photo.jpg",roundedCircle:!0}),n.a.createElement(g.a.Text,null,"Franck"),n.a.createElement(f.a,{as:y.a,alignRight:!0},n.a.createElement(f.a.Toggle,{split:!0,id:"dropdown-split-basic",className:"userProfileActions"}),n.a.createElement(f.a.Menu,null,n.a.createElement(f.a.Item,{onClick:this.props.logout},"D\xe9connexion"))))),n.a.createElement("div",{className:"albums-header-title"},n.a.createElement("h1",null,this.state.currentPageName)))}},{key:"renderBody",value:function(){var e=this.state.currentPage;return"albums"===e?n.a.createElement(L,{albumList:this.state.albumList,setAlbumPage:this.setAlbumPage}):"album-page"===e?n.a.createElement(P,{setMusicPage:this.setMusicPage,albumData:this.state.currentAlbum}):"music-page"===e?n.a.createElement(T,{albumTitle:this.state.albumTitle,musicTitle:this.state.musicTitle,musicParoles:this.state.musicParoles,albumPhotoSrc:this.state.albumPhotoSrc}):void 0}},{key:"render",value:function(){return n.a.createElement("div",{className:"albums-container"},this.renderHeader(),n.a.createElement("div",{className:"whiyteLineSeparator"}),this.renderBody())}}]),a}(n.a.Component),I=(a(67),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).handleEmail=function(e){l.setState({email:e.target.value})},l.handlePassword=function(e){l.setState({password:e.target.value})},l.handleLogin=function(e){e.preventDefault();var t=l.state.email,a=l.state.password;"franck@gmail.com"===t&&"patate"===a&&l.setState({isLogged:!0})},l.logout=function(){l.setState({isLogged:!1})},l.state={email:null,password:null,isLogged:!1},l.handleEmail=l.handleEmail.bind(Object(c.a)(l)),l.handlePassword=l.handlePassword.bind(Object(c.a)(l)),l.handleLogin=l.handleLogin.bind(Object(c.a)(l)),l.logout=l.logout.bind(Object(c.a)(l)),l}return Object(o.a)(a,[{key:"renderLoginHeader",value:function(){return n.a.createElement("div",{className:"login-header"},n.a.createElement("img",{className:"spotify-logo",src:"assets/img/Spotify_Logo_RGB_White.png",alt:"spotify-logo"}),n.a.createElement("h3",null,"De la musique pour tous."))}},{key:"renderLoginBody",value:function(){return n.a.createElement(h.a,{className:"login-form",onSubmit:this.handleLogin},n.a.createElement(h.a.Group,{controlId:"formBasicEmail"},n.a.createElement(h.a.Control,{type:"email",placeholder:"Adresse courriel ou nom d'utilisateur",onChange:this.handleEmail})),n.a.createElement(h.a.Group,{controlId:"formBasicEmail"},n.a.createElement(h.a.Control,{type:"password",placeholder:"Mot de passe",onChange:this.handlePassword})),n.a.createElement(h.a.Group,{controlId:"formBasicCheckbox"},n.a.createElement(h.a.Check,{type:"checkbox",label:"Garder ma session ouverte",className:"form-check-label"})),n.a.createElement(d.a,{size:"lg",type:"submit",onClick:this.handleLogin},"SE CONNECTER"))}},{key:"renderLoginContent",value:function(){return n.a.createElement(b.a,{className:"login"},this.renderLoginHeader(),this.renderLoginBody())}},{key:"render",value:function(){return this.state.isLogged?n.a.createElement(B,{logout:this.logout}):this.renderLoginContent()}}]),a}(n.a.Component));var R=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.6acc7f64.chunk.js.map