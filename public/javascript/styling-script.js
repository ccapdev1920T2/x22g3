// var list = document.getElementById('navlist').children;
var href = document.location.href;

// if this is a moderator page, remove margin left
// if (href.search('-mod') != -1) {
//     var main = document.getElementById('main');
//     main.style.maxWidth = '100vw';
//     var content = document.getElementById('content');
//     content.style.marginLeft = 0;
// } else {
//     activate('sidebarlist');

// }

// activate('navlist');

// give the current list item an 'active' effect
// function activate(listSelector) {
//     var list = document.getElementById(listSelector).children;
//     for (let i = 0; i < list.length; i++) {
//         var file = document.location.href.match(/[^\/]+$/)[0] || 'index.html';
//         if (file == list[i].firstElementChild.getAttribute('href')) {
//             list[i].firstElementChild.id = 'active';
//         }
//     }
// }

// For the 2 cart pages, to be refactored in Milestone 2
// if(document.location.href.includes('cart')) {
//     list[0].firstElementChild.id = 'active';
// }

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

responsiveFontSize("[class^='res-']");
responsiveFontSize("h1", 60);
responsiveFontSize("h2", 42);
responsiveFontSize("h3", 20);

active("#navlist");
active("#sidebarlist")