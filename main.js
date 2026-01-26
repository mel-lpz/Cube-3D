AFRAME.registerComponent('terminal-interaction', {
    init: function() {
        console.log('Component terminal-interaction initialisé sur:', this.el);
        
        // Fonction pour transformer la scène
        const transformScene = (evt) => {
            console.log('Transformation de la scène!', evt.type);
            
            const grass = document.querySelector('#grass');
            const wall = document.querySelector('#wall');
            const ceiling = document.querySelector('#ceiling');
            const forest = document.querySelector('#forest');
            const scene = document.querySelector('#scene');
            const ambientLight = document.querySelector('#ambientLight');
            
            // Faire apparaître la plante centrale
            if (grass) {
                grass.setAttribute('scale', '1 1 1');
                console.log('Plante centrale visible!');
            }
            
            // Faire disparaître le mur
            if (wall) {
                wall.setAttribute('visible', 'false');
                console.log('Mur caché!');
            }
            
            // Faire disparaître le plafond
            if (ceiling) {
                ceiling.setAttribute('visible', 'false');
                console.log('Plafond caché!');
            }
            
            // Faire apparaître la forêt
            if (forest) {
                forest.setAttribute('visible', 'true');
                console.log('Forêt visible!');
            }
            
            // Changer le ciel en bleu et ajuster le fog
            if (scene) {
                scene.setAttribute('background', 'color: #87CEEB');
                scene.setAttribute('fog', 'type: linear; color: #87CEEB; near: 15; far: 50');
                console.log('Ciel bleu!');
            }
            
            // Augmenter la luminosité ambiante
            if (ambientLight) {
                ambientLight.setAttribute('intensity', '0.8');
                console.log('Luminosité augmentée!');
            }
        };
        
        // Desktop: clic avec la souris via le cursor
        this.el.addEventListener('click', transformScene);
        
        // VR: événements des contrôleurs
        this.el.addEventListener('mouseenter', () => {
            console.log('Curseur sur le terminal');
        });
        
        this.el.addEventListener('mouseleave', () => {
            console.log('Curseur quitte le terminal');
        });
    }
});
