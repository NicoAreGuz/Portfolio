// dropdown menu (only visibly on hover)
document.getElementById('name2').addEventListener('mouseover', function() { //display menu if mouse is over title
    document.getElementById('dropdown2').style.display = 'block';
});

document.getElementById('name2').addEventListener('mouseout', function() {  //hide menu if mouse is not over title
    document.getElementById('dropdown2').style.display = 'none';
});

document.getElementById('dropdown2').addEventListener('mouseover', function() { //display menu if mouse if over menu
    document.getElementById('dropdown2').style.display = 'block';
});

document.getElementById('dropdown2').addEventListener('mouseout', function() {  // hide menu is mouse is not over menu
    document.getElementById('dropdown2').style.display = 'none';
});

// fonts to cycle through
const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana', 'Impact', 'Lucida Console', 'Tahoma', 'Trebuchet MS', 'Cabinet Grotesk', 'Zodiak', 'RX100', 'Supereme'];

// function to cycle fonts for each letter once, so text on pages isn't jittery
function cycleFontsOnce(element) {
    const letters = element.textContent.split('');
    const fontSpans = letters.map(letter => {
      const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      return `<span style="font-family: ${randomFont}">${letter}</span>`;
    });
  
    element.innerHTML = fontSpans.join('');
  }

//apply font cycle once
cycleFontsOnce(document.getElementById('name2'));