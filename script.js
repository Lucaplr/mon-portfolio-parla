// Cibler le bouton
const themeButton = document.getElementById('theme-toggle');

// Écouter le clic
themeButton.addEventListener('click', () => {
    // Manipuler : basculer la classe dark-mode sur body
    document.body.classList.toggle('dark-mode');
    
    // Changer le texte du bouton
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = 'Mode Clair';
    } else {
        themeButton.textContent = 'Mode Sombre';
    }
});