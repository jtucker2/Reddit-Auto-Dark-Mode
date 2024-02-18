const darkThemeMq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
var isSystemDark = darkThemeMq.matches;

var userDropDownButton = document.getElementById("USER_DROPDOWN_ID");

switchTheme();

darkThemeMq.addEventListener('change', function(e) { 
    isSystemDark = e.matches;
    switchTheme();
})


// Switches reddit's theme if it doesn't match the system theme
function switchTheme() {

    const observer = new MutationObserver(function(mutationList, observer) {

        /* Sometimes the JavaScript that opens the drop down hasn't loaded in time for the first 
        click event so we try again here in case it hasn't opened */
        openUserDropDown();

        var userDropDown = document.getElementsByClassName("_2uYY-KeuYHKiwl-9aF0UiL _1HSQGYlfPWzs40LP4_oFi5 _2XkHtsPtFuTExJyk9JQUAp")[0];

        if (userDropDown == null) {
            return;
        }
        
        // If you're not logged in the settings button needs to be expanded in the user drop down
        if (!isLoggedIn()) {
            var buttons = document.getElementsByClassName("_3fbofimxVp_hpVM6I1TGMS GCltVwsXPu5lE-gs4Nucu");
            
            for (var button of Array.from(buttons)) {
                if (button.firstChild.childNodes[1].innerText == "Settings") {
                    button.click();
                }
            }
        }

        buttons = document.getElementsByClassName("nBh6t8H3UNZpI1Ce9s6yQ");

        for (var button of Array.from(buttons)) {
    
            if (button.firstChild.innerText == "Dark Mode") {

                var isRedditDark = button.lastChild.getAttribute("aria-checked");
                if (isRedditDark != isSystemDark.toString()) button.click();
                break;
                
            }
        }

        closeUserDropDown();
        observer.disconnect();

    });

    observer.observe(document.body, {childList: true});

    // Ensures there is a DOM change for the observer in case nothing is happening on the page
    openUserDropDown();

}

function openUserDropDown() {
    if (userDropDownButton.getAttribute("aria-expanded") == "false") userDropDownButton.click();
}
function closeUserDropDown() {
    if (userDropDownButton.getAttribute("aria-expanded") == "true") userDropDownButton.click();
}

function isLoggedIn() {
    var e = document.getElementsByClassName("_3Wg53T10KuuPmyWOMWsY2F _2iuoyPiKHN3kfOoeIQalDT _2tU8R9NTqhvBrhoNAXWWcP HNozj_dKjQZ59ZsfEegz8 _2nelDm85zKKmuD94NequP0");
    try {
        return e[0].innerText != "Log In";
    } catch(e) {
        return true;
    }
}
