let paragraph = document.querySelector('p')

let screw = document.querySelector('.hero-image');
let screwdriver = document.querySelector('.hero-text');

screw.animate(
    [
        { opacity: 0, transform: 'scale(0.7)' },
        { opacity: 1, transform: 'scale(1.0)' }
    ],
    {
        duration: 500,
        easing: 'linear',
    }
);

screwdriver.animate(
    [
        { opacity: 0, transform: 'scale(0.7)' },
        { opacity: 1, transform: 'scale(1.0)' }
    ],
    {
        duration: 500,
        easing: 'linear',
    }
);
