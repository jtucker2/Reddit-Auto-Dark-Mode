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

    // When opened, the user dropdown always seems to be the last element in the document body
    var userDropDown = document.body.lastChild.firstChild;
    var userDropDownElements = userDropDown.firstChild.childNodes;
    
    for (var element of Array.from(userDropDownElements)) {

        var elementButton = element.firstChild;

        if (elementButton.firstChild.innerText == "Dark Mode") {

            var isRedditDark = elementButton.lastChild.getAttribute("aria-checked");
            if (isRedditDark != isSystemDark.toString()) elementButton.click();
            break;
            
        }

    }

    userDropDownButton.click();
}