//HEADER SPAN ANIMÁCIÓ

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
            entry.target.classList.add('show');
        else
            entry.target.classList.remove('show');
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// GÖRGETÉSES STICKY HEADER SPAN ANIMÁCIÓ

const stickySpan = document.getElementById('stickySpan');
const headerSpan = document.getElementById('headerSpan');

const stickyObs = new IntersectionObserver(elem => {
    if(elem[0].isIntersecting)
        stickySpan.classList.remove('show');
    else
        stickySpan.classList.add('show');
});

stickyObs.observe(headerSpan);

// MENÜ ANIMÁCIÓ ÉS KATTINTÁS

function showMenu() {
    document.querySelector('.menu').classList.add('showMenu');
}

function hideMenu() {
    document.querySelector('.menu').classList.remove('showMenu');
}

function showApps() {
    document.querySelector('.apps').classList.toggle('showApps');
}