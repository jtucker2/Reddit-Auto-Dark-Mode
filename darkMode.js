const darkThemeMq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
var isSystemDark = darkThemeMq.matches;

switchTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) { 
    isSystemDark = e.matches;
    switchTheme();
})

// Switches reddit's theme if it doesn't match the system theme
function switchTheme() {
    var userDropDownButton = document.getElementById("USER_DROPDOWN_ID");
    userDropDownButton.click();

    var userDropDown = document.body.lastChild.firstChild;
    var userDropDownElements = userDropDown.firstChild.childNodes;
    
    for (var element of Array.from(userDropDownElements)) {
        if (element.getAttribute("class") == "_3SDj_IT6ZaqCbKfC4eTjb2") {
            if (element.firstChild.firstChild.innerText == "Dark Mode") {
                var isRedditDark = element.firstChild.lastChild.getAttribute("aria-checked");

                if (isRedditDark != isSystemDark.toString()) {
                    element.firstChild.click();
                }

                break;
            }
        }
    }

    userDropDownButton.click();
}