// Height of all  - 100px;
// Width of Top 3  - 200px;
// Font size - 30px;
// BG Color - #888
// Border width of all  - 15px
// Border color of all  - rgb(54, 52, 52)

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "#888";
    buttons[i].style.border = "15px solid rgb(54, 52, 52)";
    buttons[i].style.borderRadius = "15px";
    buttons[i].style.width = "200px";
    buttons[i].style.height = "100px";
    buttons[i].style.fontSize = "30px";
    buttons[i].style.color = "white";
};

buttons[3].style.display = 'block';
buttons[3].style.width = '610px';
buttons[3].innerText += 'th button';

// buttons[3].innerText = buttons[3].innerText + ''