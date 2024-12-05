// Attendre que tout le contenu de la page soit entièrement chargé avant d'exécuter le code comme dans l'exercice du DOM
document.addEventListener("DOMContentLoaded", function() {

    // Récupère l'élément bouton ayant l'id 'scrollTopBtn' dans le document HTML
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // On fais cela afin de sign,aler qu'on a scroller vers le bas et qu'il va falloir afficher le button donc
    window.onscroll = function() {
        // Vérifie si la page a été défilée de plus de 200 pixels
        if (document.documentElement.scrollTop > 200) {
            // Si c'est le cas, le bouton devient visible
            scrollTopBtn.style.display = "block";
        } else {
            // Sinon, le bouton est caché
            scrollTopBtn.style.display = "none";
        }
    };

    // Lorsque l'utilisateur clique sur le bouton, cette fonction est appelée
    scrollTopBtn.addEventListener('click', function() {
        // Fait défiler la page jusqu'en haut de manière fluide (en douceur)
        window.scrollTo({
            top: 0,             // Position du haut de la page afin de monter tout en haut
            behavior: 'smooth'  // Défilement fluide
        });
    });
});

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}