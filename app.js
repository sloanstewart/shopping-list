// In terms of user experience, your shopping list app must allow users to:
// - enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// - check and uncheck items on the list by clicking the "Check" button
// - permanently remove items from the list

// State object
var state = {
	items: [],
};

// Render functions
var renderList = function(state) {
	var itemsHTML = state.items.map(function(item) {
		return '<li>'
        + '<span class="shopping-item">' + item + '</span>'
        + '<div class="shopping-item-controls">'
        + '<button class="shopping-item-toggle">'
        +    '<span class="button-label">check</span> '
        +  '</button> ' //had to cheat a space here
        +  '<button class="shopping-item-delete">'
        +    '<span class="button-label">delete</span>'
        +  '</button>'
        + '</div>'
        + '</li>';
	});
	$('.shopping-list').html(itemsHTML);

	$('.shopping-item-toggle').click(function(event) {
		event.preventDefault();
		toggleItem(this);
	});


	$('.shopping-item-delete').click(function(event) {
		event.preventDefault();
		deleteItem(state, this);
	});

	console.log('Items: ' + state.items)
};

// State modification
var addItem = function(state, item) {
	state.items.push(item);
	console.log('Added: ' + item);
};

var addExistingItem = 
	$('.shopping-item').each(function() {
		addItem(state, $(this).text() );
		renderList(state);
	});

var toggleItem = function(item) {
	var checkThis = $(item).closest('li').find('.shopping-item');
	checkThis.toggleClass('shopping-item__checked');
	console.log('Toggled: ' + $(checkThis).text());
};

var deleteItem = function(state, item) {
	var deleteThis = $(item).closest('li').find('.shopping-item').text();
	state.items = state.items.filter(function(x) {
		return deleteThis !== x;
	});
	console.log('Deleted: ' + deleteThis);
	renderList(state);
};

// Event listeners
$('#js-shopping-list-form').submit(function(event) {
	event.preventDefault();
	addItem(state, $('#shopping-list-entry').val());
	// alert('entered: ' + $('#shopping-list-entry').val());
	renderList(state);
});

addExistingItem;	