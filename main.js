AFRAME.registerComponent('terminal-interaction', {
    init: function() {
        console.log('Component terminal-interaction initialisé sur:', this.el);
        
        let isActivated = false; // Empêcher les clics multiples
        
        // Fonction pour transformer la scène
        const transformScene = (evt) => {
            if (isActivated) return; // Ignorer si déjà activé
            isActivated = true;
            
            console.log('Terminal activé!', evt.type);
            
            // 1. Jouer le son de clic
            const clicSound = document.querySelector('#clicSound');
            if (clicSound && clicSound.components.sound) {
                clicSound.components.sound.playSound();
                console.log('Son de clic joué!');
            }
            
            // 2. Afficher l'hologramme rouge
            const hologram = document.querySelector('#hologram');
            const holoScreen = document.querySelector('#holoScreen');
            const holoScanline = document.querySelector('#holoScanline');
            
            if (hologram) {
                hologram.setAttribute('visible', 'true');
                console.log('Hologramme rouge affiché!');
            }
            
            // 3. Après 2 secondes, passer au bleu
            setTimeout(() => {
                // Jouer le son de clic pour le passage au bleu
                if (clicSound && clicSound.components.sound) {
                    clicSound.components.sound.playSound();
                    console.log('Son de clic (passage bleu)!');
                }
                
                if (holoScreen) {
                    holoScreen.setAttribute('material', 'color: #00aaff; opacity: 0.4; transparent: true; side: double; emissive: #00aaff; emissiveIntensity: 0.5');
                    holoScreen.parentElement.children[1].setAttribute('material', 'color: #00aaff; opacity: 0.8; transparent: true; wireframe: true; emissive: #00aaff; emissiveIntensity: 1');
                    console.log('Hologramme bleu!');
                }
                
                // 4. Après le passage au bleu, transformer la scène
                setTimeout(() => {
                    // Cacher l'hologramme
                    if (hologram) {
                        hologram.setAttribute('visible', 'false');
                    }
                    
                    // Changer l'audio : arrêter ambiance, démarrer forêt
                    const ambianceSound = document.querySelector('#ambianceSound');
                    const forestSound = document.querySelector('#forestSound');
                    
                    if (ambianceSound && ambianceSound.components.sound) {
                        ambianceSound.components.sound.stopSound();
                        console.log('Ambiance arrêtée');
                    }
                    
                    if (forestSound && forestSound.components.sound) {
                        forestSound.components.sound.playSound();
                        console.log('Son forêt lancé!');
                    }
                    
                    // Transformation visuelle de la scène
                    const grass = document.querySelector('#grass');
                    const wall = document.querySelector('#wall');
                    const ceiling = document.querySelector('#ceiling');
                    const forest = document.querySelector('#forest');
                    const forestWall = document.querySelector('#forestWall');
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
                    
                    // Faire apparaître le mur panoramique de forêt
                    if (forestWall) {
                        forestWall.setAttribute('visible', 'true');
                        console.log('Mur panoramique forêt visible!');
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
                    
                    console.log('Transformation complète!');
                }, 500); // Petit délai après le bleu
                
            }, 2000); // 2 secondes avant de passer au bleu
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
