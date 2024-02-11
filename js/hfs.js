//for loading header and footer in every page using jQuery
$(function () {
    $("#header").load("/header.html");
    $("#footer").load("/footer.html");
})

//for enabling searchbar to appear onClick search button
//onClick() not working on injected HTML, thus, using .on event handler
function cardmargin() {

    $(".togglesearch").toggle();
    $("input[type='text']").focus();
}
$(document).on('click', '.sbtn', cardmargin);



