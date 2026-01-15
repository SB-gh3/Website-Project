function sizeLogoToNav() {
    const nav = document.getElementById('flexnav');
    const logoImg = document.querySelector('.logo-link img');

    if (!nav || !logoImg) return;

    const navHeight = nav.getBoundingClientRect().height;
    logoImg.style.height = `${navHeight}px`;
    logoImg.style.width = 'auto';
}

// run after layout
window.addEventListener('load', sizeLogoToNav);
window.addEventListener("DOMContentLoaded", (event) => { sizeLogoToNav; })
window.addEventListener('resize', sizeLogoToNav);
