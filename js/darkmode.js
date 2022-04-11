// Never worked with local storage before, so implementation may suck.
// This took me forever. May not have been worth it, but I learned stuff.
let dbool;
window.onload = function() {
    localStorage.getItem('isDark') ? dbool = localStorage.getItem('isDark') : dbool = false;
    if (dbool == "true") {
        document.body.classList.add("dark");
        document.getElementById("darkButton").innerHTML = "<img src='images/moon.svg' alt='dark'>";
    } else {
        document.body.classList.remove("dark");
        document.getElementById("darkButton").innerHTML = "<img src='images/sun.svg' alt='light'>";
    }
};

function darkMode() {
    if (dbool == false) {
        dbool = true;
        document.body.classList.add("dark");
        document.getElementById("darkButton").innerHTML = "<img src='images/moon.svg' alt='dark'>";
        localStorage.setItem('isDark', true);
    } else {
        dbool = false;
        document.body.classList.remove("dark");
        document.getElementById("darkButton").innerHTML = "<img src='images/sun.svg' alt='light'>";
        localStorage.setItem('isDark', false);
    }
}