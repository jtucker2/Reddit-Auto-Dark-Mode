const darkThemeMq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
var isDarkTheme = darkThemeMq.matches;

switchTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) { 
    isDarkTheme = e.matches;
    switchTheme();
})

function switchTheme() {
    var dropDownButton = document.getElementById("USER_DROPDOWN_ID");
    dropDownButton.click();
    var body = document.body;
    dropDown = body.lastChild.firstChild;
    var possibles = dropDown.firstChild.childNodes;
    
    for (var possible of Array.from(possibles)) {
        if (possible.getAttribute("class") == "_3SDj_IT6ZaqCbKfC4eTjb2") {
            if (possible.firstChild.firstChild.innerText == "Dark Mode") {
                var isRedditDark = possible.firstChild.lastChild.getAttribute("aria-checked");

                if (isRedditDark != isDarkTheme.toString()) {
                    possible.firstChild.click();
                }

                break;
            }
        }
    }

    dropDownButton.click();
}