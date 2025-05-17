function loadHTML(selector, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
            var path = window.location.pathname.substring(1);
            $('.menu>.nav>li>a[href="' + path + '"]').addClass('active');
        });
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

loadHTML('#home', 'header.html');
loadHTML('#footer', 'footer.html');