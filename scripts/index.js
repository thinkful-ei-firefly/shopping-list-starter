/* global shoppingList, store, Item */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.createItem('apples'));
