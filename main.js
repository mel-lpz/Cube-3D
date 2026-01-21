AFRAME.registerComponent('terminal-interaction', {
    init: function() {
        console.log('Component terminal-interaction initialisé sur:', this.el);
        
        const grass = document.querySelector('#grass');
        
        // Fonction pour faire apparaître la plante
        const showGrass = (evt) => {
            console.log('Interaction détectée!', evt.type);
            if (grass) {
                grass.setAttribute('scale', '1 1 1');
                console.log('Grass visible!');
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
