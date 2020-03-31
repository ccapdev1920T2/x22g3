var href = document.location.href;

function active(selector) {
    var list = document.querySelector(selector).children;
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        var route = element.firstElementChild.getAttribute('href').slice(1);
        if (window.location.href.includes(route)) {
            element.firstElementChild.id = "active";
        }
    }
}

function responsiveFontSize(selector) {
    var resList = document.querySelectorAll(selector);

    resList.forEach(e => {
        var num;
        if (arguments.length == 1) {
            var regex = /\d+/;
            num = (e.className.match(regex)[0]) / 2;
        }
        else {
            num = arguments[1] / 2;
        }

        e.style.fontSize = "calc(" + (num / 16) + "rem + " + ((num / 1200) * 100) + "vw)";
    });
}
