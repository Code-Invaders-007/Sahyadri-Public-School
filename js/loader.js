function loadTemplate(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}

window.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('header');
    var footer = document.getElementById('footer');

    loadTemplate('Components/header.html', function (html) {
        header.innerHTML = html;
    });

    loadTemplate('Components/footer.html', function (html) {
        footer.innerHTML = html;
    });
});