function loadHTML(selector, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
            var path = window.location.pathname.substring(1);
            $('#nav>li>a[href="' + path + '"]').addClass('active');
        });
}

loadHTML('#home', 'header.html');
loadHTML('#footer', 'footer.html');