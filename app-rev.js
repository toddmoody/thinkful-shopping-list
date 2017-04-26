// 1.---Single state object---
var state = {
    items: []
};

// 2.---State modification functions---
var addItem = function(state, item) {
    state.items.push(item);
};

// 3.---Render function, Delete & Toggle functions---
renderItem = function() {
    $("ul").append(
        '<li>' +
            '<span class="shopping-item js-shopping-item"><strong>' + state.items[state.items.length - 1] + '</strong></span>' +
            '<div class="shopping-item-controls">' +
            '<button class=js-shopping-item-toggle">' +
                '<em class="button-toggle">check</em>' +
            '</button>' +
            '<button id="js-shopping-item-delete">' +
                '<span class="button-delete">delete</span>' +
            '</button>' +
            '</div>' +
        '</li>'
    );
};

// Delete function
$("ul").on("click", "span", function(event){
    $(this).closest("li").fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Toggle function
    $("ul").on("click", "em", function(event){
        $(this).closest("li").toggleClass("shopping-item__checked");
    });

// 4.---Event listeners---

//Add new shopping list item
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#js-new-item').val());
    renderItem();
});

