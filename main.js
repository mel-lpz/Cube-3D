document.addEventListener('DOMContentLoaded', () => {
    console.log('Script chargé');
    
    const terminal = document.querySelector('#terminalTrigger');
    const grass = document.querySelector('#grass');
    
    console.log('Terminal trouvé:', terminal);
    console.log('Grass trouvé:', grass);

    if (terminal && grass) {
        terminal.addEventListener('click', () => {
            console.log('Clic détecté sur le terminal!');
            grass.setAttribute('scale', '1 1 1');
            console.log('Grass scale changé à 1 1 1');
        });
    } else {
        console.error('Éléments non trouvés');
    }
});
