const darkThemeMq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
var isSystemDark = darkThemeMq.matches;


var userDropDownButton = document.getElementById("USER_DROPDOWN_ID");

function openUserDropDown() {
    if (userDropDownButton.getAttribute("aria-expanded") == "false") userDropDownButton.click();
}
function closeUserDropDown() {
    if (userDropDownButton.getAttribute("aria-expanded") == "true") userDropDownButton.click();
}


switchTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) { 
    isSystemDark = e.matches;
    switchTheme();
})


// Switches reddit's theme if it doesn't match the system theme
function switchTheme() {

    const observer = new MutationObserver(function(mutationList, observer) {

        /* Sometimes the JavaScript that opens the drop down hasn't loaded in time for the first 
        click event so we try again here in case it hasn't opened */
        openUserDropDown();

        var userDropDown = document.body.lastChild.firstChild;

        // When opened, the user dropdown always seems to be the last element in the document body
        if (userDropDown != null && userDropDown.getAttribute("class") == "_2uYY-KeuYHKiwl-9aF0UiL _1HSQGYlfPWzs40LP4_oFi5 _2XkHtsPtFuTExJyk9JQUAp") {

            var userDropDownElements = userDropDown.firstChild.childNodes;
        
            for (var element of Array.from(userDropDownElements)) {
    
                var elementButton = element.firstChild;
    
                if (elementButton.firstChild.innerText == "Dark Mode") {
    
                    var isRedditDark = elementButton.lastChild.getAttribute("aria-checked");
                    if (isRedditDark != isSystemDark.toString()) elementButton.click();
                    break;
                    
                }
    
            }
    
            closeUserDropDown();
            observer.disconnect();

        }

    });

    observer.observe(document.body, {childList: true});

    // Ensures there is a DOM change for the observer in case nothing is happening on the page
    openUserDropDown();

}