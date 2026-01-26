AFRAME.registerComponent('terminal-interaction', {
    init: function() {
        console.log('Component terminal-interaction initialisé sur:', this.el);
        
        // Fonction pour faire apparaître la plante
        const showGrass = (evt) => {
            console.log('Interaction détectée!', evt.type);
            // Chercher l'élément au moment du clic
            const grass = document.querySelector('#grass');
            console.log('Grass element:', grass);
            if (grass) {
                grass.setAttribute('scale', '1 1 1');
                console.log('Grass visible! Scale:', grass.getAttribute('scale'));
            } else {
                console.error('Grass non trouvé!');
            }
        };
        
        // Desktop: clic avec la souris via le cursor
        this.el.addEventListener('click', showGrass);
        
        // VR: événements des contrôleurs
        this.el.addEventListener('mouseenter', () => {
            console.log('Curseur sur le terminal');
        });
        
        this.el.addEventListener('mouseleave', () => {
            console.log('Curseur quitte le terminal');
        });
    }
});
