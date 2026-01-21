AFRAME.registerComponent('terminal-interaction', {
    init: function() {
        console.log('Component terminal-interaction initialisé');
        
        this.el.addEventListener('click', () => {
            console.log('Clic détecté sur le terminal!');
            const grass = document.querySelector('#grass');
            if (grass) {
                grass.setAttribute('scale', '1 1 1');
                console.log('Grass scale changé à 1 1 1');
            }
        });
    }
});
