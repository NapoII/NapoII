// ascii-art_bling_bling.js
fetch('ASCII.txt')
    .then(response => response.text())
    .then(text => {
        const asciiArt = document.getElementById('ascii-art');
        asciiArt.textContent = text;
    });

    // Bling bling :


      