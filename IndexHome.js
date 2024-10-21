// dropdown menu (only visibly on hover)
document.getElementById('name').addEventListener('mouseover', function() {  //display menu if mouse is over title
    document.getElementById('dropdown').style.display = 'block';
});

document.getElementById('name').addEventListener('mouseout', function() {   // hide menu is mouse is not over title
    document.getElementById('dropdown').style.display = 'none';
});

document.getElementById('dropdown').addEventListener('mouseover', function() {  //display menu if mouse is over menu
    document.getElementById('dropdown').style.display = 'block';
});

document.getElementById('dropdown').addEventListener('mouseout', function() {  // hide menu is mouse is not over menu
    document.getElementById('dropdown').style.display = 'none';
});

// fonts to cycle through
const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana', 'Impact', 'Lucida Console', 'Tahoma', 'Trebuchet MS', 'Cabinet Grotesk', 'Zodiak', 'RX100', 'Supereme'];

// function to cycle fonts for each letter
function cycleFonts(element) {
    const letters = element.textContent.split('');
    element.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');

    const spans = element.querySelectorAll('span');
    spans.forEach(span => {
        setInterval(() => {
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            span.style.fontFamily = randomFont;
        }, Math.random() * 1000 + 500); // random interval between 500ms and 1500ms
    });
}

// apply the font cycling to the name
cycleFonts(document.getElementById('name'));