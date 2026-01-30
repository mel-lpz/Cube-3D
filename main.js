AFRAME.registerComponent('terminal-interaction', {
    init: function() {
        console.log('Component terminal-interaction initialisé sur:', this.el);
        
        let isTransitioning = false; // Empêcher les clics pendant la transition
        let isInForest = false; // État actuel de la scène
        
        // Fonction pour transformer la scène
        const transformScene = (evt) => {
            if (isTransitioning) return; // Ignorer si transition en cours
            isTransitioning = true;
            
            console.log('Terminal activé!', evt.type, 'État forêt:', isInForest);
            
            const clicSound = document.querySelector('#clicSound');
            const loadingSound = document.querySelector('#loadingSound');
            const hologram = document.querySelector('#hologram');
            const holoScreen = document.querySelector('#holoScreen');
            const holoBorder = holoScreen ? holoScreen.parentElement.children[2] : null;
            
            // Jouer le son de clic
            if (clicSound && clicSound.components.sound) {
                clicSound.components.sound.playSound();
                console.log('Son de clic joué!');
            }
            
            // Jouer le son de loading
            if (loadingSound && loadingSound.components.sound) {
                loadingSound.components.sound.playSound();
                console.log('Son de loading joué!');
            }
            
            if (!isInForest) {
                // === TRANSITION LABO → FORÊT ===
                // Afficher l'hologramme ROUGE
                if (hologram) {
                    holoScreen.setAttribute('material', 'color: #ff0000; opacity: 0.4; transparent: true; side: double; emissive: #ff0000; emissiveIntensity: 0.5');
                    if (holoBorder) holoBorder.setAttribute('material', 'color: #ff0000; opacity: 0.8; transparent: true; wireframe: true; emissive: #ff0000; emissiveIntensity: 1');
                    hologram.setAttribute('visible', 'true');
                    console.log('Hologramme rouge affiché!');
                }
                
                // Après 2 secondes, passer au BLEU
                setTimeout(() => {
                    if (clicSound && clicSound.components.sound) {
                        clicSound.components.sound.playSound();
                    }
                    
                    if (holoScreen) {
                        holoScreen.setAttribute('material', 'color: #00aaff; opacity: 0.4; transparent: true; side: double; emissive: #00aaff; emissiveIntensity: 0.5');
                        if (holoBorder) holoBorder.setAttribute('material', 'color: #00aaff; opacity: 0.8; transparent: true; wireframe: true; emissive: #00aaff; emissiveIntensity: 1');
                        console.log('Hologramme bleu!');
                    }
                    
                    // Transformer vers la forêt
                    setTimeout(() => {
                        if (hologram) hologram.setAttribute('visible', 'false');
                        goToForest();
                        isInForest = true;
                        isTransitioning = false;
                        console.log('Transformation vers forêt complète!');
                    }, 500);
                    
                }, 2000);
                
            } else {
                // === TRANSITION FORÊT → LABO ===
                // Afficher l'hologramme BLEU
                if (hologram) {
                    holoScreen.setAttribute('material', 'color: #00aaff; opacity: 0.4; transparent: true; side: double; emissive: #00aaff; emissiveIntensity: 0.5');
                    if (holoBorder) holoBorder.setAttribute('material', 'color: #00aaff; opacity: 0.8; transparent: true; wireframe: true; emissive: #00aaff; emissiveIntensity: 1');
                    hologram.setAttribute('visible', 'true');
                    console.log('Hologramme bleu affiché!');
                }
                
                // Après 2 secondes, passer au ROUGE
                setTimeout(() => {
                    if (clicSound && clicSound.components.sound) {
                        clicSound.components.sound.playSound();
                    }
                    
                    if (holoScreen) {
                        holoScreen.setAttribute('material', 'color: #ff0000; opacity: 0.4; transparent: true; side: double; emissive: #ff0000; emissiveIntensity: 0.5');
                        if (holoBorder) holoBorder.setAttribute('material', 'color: #ff0000; opacity: 0.8; transparent: true; wireframe: true; emissive: #ff0000; emissiveIntensity: 1');
                        console.log('Hologramme rouge!');
                    }
                    
                    // Transformer vers le labo
                    setTimeout(() => {
                        if (hologram) hologram.setAttribute('visible', 'false');
                        goToLab();
                        isInForest = false;
                        isTransitioning = false;
                        console.log('Transformation vers labo complète!');
                    }, 500);
                    
                }, 2000);
            }
        };
        
        // Fonction pour aller vers la forêt
        const goToForest = () => {
            const ambianceSound = document.querySelector('#ambianceSound');
            const forestSound = document.querySelector('#forestSound');
            const woodpeckerSound = document.querySelector('#woodpeckerSound');
            const grass = document.querySelector('#grass');
            const wall = document.querySelector('#wall');
            const ceiling = document.querySelector('#ceiling');
            const forest = document.querySelector('#forest');
            const forestWall = document.querySelector('#forestWall');
            const scene = document.querySelector('#scene');
            const ambientLight = document.querySelector('#ambientLight');
            
            // Changer l'audio
            if (ambianceSound && ambianceSound.components.sound) {
                ambianceSound.components.sound.stopSound();
            }
            if (forestSound && forestSound.components.sound) {
                forestSound.components.sound.playSound();
            }
            if (woodpeckerSound && woodpeckerSound.components.sound) {
                woodpeckerSound.components.sound.playSound();
            }
            
            // Transformation visuelle
            if (grass) grass.setAttribute('scale', '1 1 1');
            if (wall) wall.setAttribute('visible', 'false');
            if (ceiling) ceiling.setAttribute('visible', 'false');
            if (forest) forest.setAttribute('visible', 'true');
            if (forestWall) forestWall.setAttribute('visible', 'true');
            if (scene) {
                scene.setAttribute('background', 'color: #87CEEB');
                scene.setAttribute('fog', 'type: linear; color: #87CEEB; near: 15; far: 50');
            }
            if (ambientLight) ambientLight.setAttribute('intensity', '0.8');
        };
        
        // Fonction pour retourner au labo
        const goToLab = () => {
            const ambianceSound = document.querySelector('#ambianceSound');
            const forestSound = document.querySelector('#forestSound');
            const woodpeckerSound = document.querySelector('#woodpeckerSound');
            const grass = document.querySelector('#grass');
            const wall = document.querySelector('#wall');
            const ceiling = document.querySelector('#ceiling');
            const forest = document.querySelector('#forest');
            const forestWall = document.querySelector('#forestWall');
            const scene = document.querySelector('#scene');
            const ambientLight = document.querySelector('#ambientLight');
            
            // Changer l'audio
            if (forestSound && forestSound.components.sound) {
                forestSound.components.sound.stopSound();
            }
            if (woodpeckerSound && woodpeckerSound.components.sound) {
                woodpeckerSound.components.sound.stopSound();
            }
            if (ambianceSound && ambianceSound.components.sound) {
                ambianceSound.components.sound.playSound();
            }
            
            // Transformation visuelle inverse
            if (grass) grass.setAttribute('scale', '0 0 0');
            if (wall) wall.setAttribute('visible', 'true');
            if (ceiling) ceiling.setAttribute('visible', 'true');
            if (forest) forest.setAttribute('visible', 'false');
            if (forestWall) forestWall.setAttribute('visible', 'false');
            if (scene) {
                scene.setAttribute('background', 'color: #111');
                scene.setAttribute('fog', 'type: linear; color: #111; near: 6; far: 14');
            }
            if (ambientLight) ambientLight.setAttribute('intensity', '0.05');
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
