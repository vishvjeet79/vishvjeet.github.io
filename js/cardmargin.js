//to bring background image in cards to center 
function marginFunction() {
    let cardd = document.querySelector(".maincard");
    let w = cardd.offsetWidth;
    let circle = document.querySelector(".card_circle");
    let ml = (450 - w) / 2; // calculates margin required as per width of card

    //for creating new style rule so that all the cards are affected
    var sheet = document.createElement('style')
    sheet.innerHTML = ".card_circle {margin-left: -" + ml + "px}";
    document.body.appendChild(sheet)
}
window.onresize = marginFunction;
window.onload = marginFunction;

