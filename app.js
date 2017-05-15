// In terms of user experience, your shopping list app must allow users to:
// - enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// - check and uncheck items on the list by clicking the "Check" button
// - permanently remove items from the list

// State object
var state = {
	items: [],
};

// State modification
var addItem = function(state, item) {
	state.items.push(item);
};

var toggleItem = function(state, item) {
	this.closest('.shopping-item').remove();
};

var deleteItem = function(state, item) {
	item.closest('li').remove();
};

// Render functions
var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {
		return '<li>'
        + '<span class="shopping-item">' + item + '</span>'
        + '<div class="shopping-item-controls">'
        + '<button class="shopping-item-toggle">'
        +    '<span class="button-label">check</span>'
        +  '</button>'
        +  '<button class="shopping-item-delete">'
        +    '<span class="button-label">delete</span>'
        +  '</button>'
        + '</div>'
        + '</li>';
	});
	element.append(itemsHTML);
};

// Event listeners
$('#js-shopping-list-form').submit(function(event) {
	event.preventDefault();
	addItem(state, $('#shopping-list-entry').val());
	// alert('entered: ' + $('#shopping-list-entry').val());
	renderList(state, $('.shopping-list'));
});

$('.shopping-item-toggle').click(function(event) {
	event.preventDefault();
	toggleItem(state, this);
});


$('.shopping-item-delete').click(function(event) {
	event.preventDefault();
	deleteItem(state, this);
});
