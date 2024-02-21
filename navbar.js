
document.addEventListener("DOMContentLoaded", function() {
    // Fetch and insert the content of the navbar.html into the "navbarContainer" div
    fetch("navbar.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("navbarContainer").innerHTML = html;
        });
});