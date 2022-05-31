const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

console.log(prefersDark);

switchTheme();

function switchTheme() {
    var dropDownButton = document.getElementById("USER_DROPDOWN_ID");
    dropDownButton.click();
    var body = document.body;
    dropDown = body.lastChild.firstChild;
    var possibles = dropDown.firstChild.childNodes;
    
    for (var possible of Array.from(possibles)) {
        if (possible.getAttribute("class") == "_3SDj_IT6ZaqCbKfC4eTjb2") {
            if (possible.firstChild.firstChild.innerText == "Dark Mode") {
                if (possible.firstChild.lastChild.getAttribute("aria-checked") != toString(prefersDark)) {
                    possible.firstChild.click();
                }
                break;
            }
        }
    }
    
    dropDownButton.click();
}