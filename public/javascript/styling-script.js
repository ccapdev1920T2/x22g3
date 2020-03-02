var list = document.getElementById('navlist').children;
var href = document.location.href;

// if this is a moderator page, remove margin left
if (href.search('-mod') != -1) {
    var main = document.getElementById('main');
    main.style.maxWidth = '100vw';
    var content = document.getElementById('content');
    content.style.marginLeft = 0;
} else {
    activate('sidebarlist');

}

activate('navlist');

// give the current list item an 'active' effect
function activate(listSelector) {
    var list = document.getElementById(listSelector).children;
    for (let i = 0; i < list.length; i++) {
        var file = document.location.href.match(/[^\/]+$/)[0] || 'index.html';
        if (file == list[i].firstElementChild.getAttribute('href')) {
            list[i].firstElementChild.id = 'active';
        }
    }
}

// For the 2 cart pages, to be refactored in Milestone 2
if(document.location.href.includes('cart')) {
    list[0].firstElementChild.id = 'active';
}

