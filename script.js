const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
// On sélectionne tous les liens à l'intérieur du menu de navigation
const navItems = document.querySelectorAll('.nav-links a');

// Gestion du clic sur le bouton burger (ouvrir / fermer)
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// NOUVEAU : Fermeture automatique du menu au clic sur un lien
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Si le menu est ouvert (sur mobile), on le referme
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
    });
});