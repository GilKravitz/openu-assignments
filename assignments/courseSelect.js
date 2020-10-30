$(function () {
    console.log("ready!");
    //create new elements
    createContainer();
    createTitle();
    //change exsiting elements
    moveFormToBodyTag();
    moveFormFields();
    removeElements();
    changeFormToSemanticTheme();
    removeBgImg();
});


// create container 
const createContainer = () => {
    $('<div/>', { class: 'ui raised very padded text container segment' }).appendTo("body");
}
const createTitle = () => {
    var title = $("<h1 class='ui huge header centered'></h1>").text("מערכת מטלות");
    var logo = $("<img class='ui image'/>").attr('src', getImageUrl("openu.svg"));
    var divider = $("<div class='ui section divider'></div>");
    $('.container').append(logo);
    $('.container').append(title);
    $('.container').append(divider);

}

// move form directly to body tag
const moveFormToBodyTag = () => {
    var element = $('form').detach();
    $('.container').append(element);
}
// move form fields directly to form container
const moveFormFields = () => {
    var inputs = $('input').detach();
    var select = $('select').detach();
    $('<div/>', { class: 'ui field field-select' }).appendTo("form");
    $('<div/>', { class: 'ui field field-inputs centered grid' }).appendTo("form");
    $('.field-select').append(select);
    $('.field-inputs').append(inputs);
}

// remove bg gifs image from body and submit input
//and initialize input as semantic ui submit button
const removeBgImg = () => {
    $('body').removeAttr('background');
    $('body').css('background-image', 'url(' + getImageUrl("bg.jpg") + ')');
    // change submit btn
    $('input[type=image]')
        .removeAttr('src')
        .attr('type', 'submit')
        .addClass('ui button blue big')
        .val('כניסה');


}
//  all unessery  elements tag from doc
const removeElements = () => {
    $('table').remove();
    $('br').remove();
}

const changeFormToSemanticTheme = () => {
    $('form').addClass('ui form ');
    $('select').dropdown();
}

const getImageUrl = (imgName) => {
    var url;
    if ($(location).attr('href').includes('127'))
        url = "/assets/images/" + imgName;
    else
        url = chrome.extension.getURL("/assets/images/" + imgName);
    return url;
}