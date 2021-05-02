// Never worked with local storage before, so implementation may suck.
// This took me forever. May not have been worth it, but I learned stuff.
var dbool;
window.onload = function() {
    dbool = localStorage.getItem('isDark');
    if (dbool == "true") {
        document.body.classList.add("dark");
        document.getElementById("darkButton").textContent = "<img src='images/moon.svg' alt='dark'>";
    } else {
        document.body.classList.remove("dark");
        document.getElementById("darkButton").textContent = "<img src='images/sun.svg' alt='light'>";
    }
};

function darkMode() {
    if (dbool == "false") {
        document.body.classList.add("dark");
        document.getElementById("darkButton").textContent = "<img src='images/moon.svg' alt='dark'>";
        localStorage.setItem('isDark', true);
        dbool = "true";
    } else {
        document.body.classList.remove("dark");
        document.getElementById("darkButton").textContent = "<img src='images/sun.svg' alt='light'>";
        localStorage.setItem('isDark', false);
        dbool = "false";
    }
}