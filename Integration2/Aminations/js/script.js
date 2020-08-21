

let animation = anime({
    targets: 'h1',
    translateX: 250,
    easing: 'easeInOutExpo',
    // autoplay: false
});

document.querySelector('h1').addEventListener('mouseover', () => {animation.play();});

let tl = anime.timeline({
    duration: 750
});

// tl.add({
//     targets: 'p',
//     translateY: '-80%'
// });

tl.add({
    targets: 'p',
    translateX: 250,
    easing: 'easeInOutExpo'
});


// anime({
//     targets: '#cube',
//     width: '100%', // -> from '28px' to '100%',
//     easing: 'easeInOutQuad',
//     direction: 'alternate',
//     loop: true
// });

/** rotation cube */
anime({
    targets: '#cube',
    translateX: {
        value: 250,
        duration: 800
    },
    rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
    },
    scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
    },
    delay: 250 // All properties except 'scale' inherit 250ms delay
});


