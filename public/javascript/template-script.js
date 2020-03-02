// Load the template from template.html to class .template
$(document).ready(function () {
    var href = window.location.href;
    var template = (href.search('-mod') == -1) ? 'template.html' : 'template-mod.html';
    $('#template').load(template);

    $('footer').html('<p>© CCAPDEV X22 Team 3 <br> Dela Cruz, Gubat, Ramos</p>');

});
