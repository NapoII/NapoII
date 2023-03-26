// Generate a random hex color code
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  // The following function executes the animation and links the text from the file
  function popAndLink() {
    // Read the link list file and split it into lines
    fetch('linklist.txt')
      .then(response => response.text())
      .then(data => {
        const lines = data.trim().split('\n');
  
        // Select a random line from the file
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
  
        // Split the link and text by semicolon
        const parts = randomLine.split(';');
  
        // Create the HTML code for the hyperlink text with a random color
        const link = `<a href="${parts[0]}" style="text-decoration:none;color:${getRandomColor()}">${parts[1]}</a>`;
  
        // Create a new element for the link text
        const newElem = document.createElement('div');
        newElem.classList.add('link-text');
        newElem.innerHTML = link;
  
        // Generate random values for position and size
        const xPos = Math.floor(Math.random() * window.innerWidth);
        const yPos = Math.floor(Math.random() * window.innerHeight);
        const size = Math.floor(Math.random() * 30) + 10;
  
        // Set the position and size of the new element
        newElem.style.position = 'fixed'; // set position to fixed
        newElem.style.top = yPos + 'px';
        newElem.style.left = xPos + 'px';
        newElem.style.fontSize = size + 'px';
        newElem.style.opacity = 0;
        newElem.style.transform = 'scale(1.5)';
  
        // Add the new element to the document
        document.body.appendChild(newElem);
  
        // Start the animation by making the text gradually larger and then disappear
        newElem.animate(
          [
            { opacity: 0, transform: 'scale(10.5)' },
            { opacity: 100, transform: 'scale(4)' },
            { opacity: 10, transform: 'scale(0.4)' },
            { opacity: 0, transform: 'scale(5.5)' },
          ],
          {
            duration: 8000,
            easing: 'ease-in-out',
          }
        );
  
        // Wait for 3 seconds and then remove the element
        setTimeout(() => {
          newElem.animate(
            { opacity: 0 },
            {
              duration: 20000,
              easing: 'ease-out',
            }
          ).onfinish = () => {
            newElem.remove();
          };
        }, 30000);
      });
  
    // Repeat the process every 3 seconds
    setTimeout(() => {
      popAndLink();
    }, 1000);
  }
  
  // Start the animation once the page has fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    popAndLink();
  });
  