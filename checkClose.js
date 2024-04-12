
function checkClose() {
    if (ok) {
        return "Have you saved your information?";
    }
}

var ok = true; // this is reset everytime a new page is loaded

function okToLeave() { // called if leaving the page is needed
    ok = false;
}

window.onbeforeunload = checkClose;
window.onunload = checkClose;
