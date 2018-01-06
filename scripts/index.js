/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems((items) => {
    items.forEach((item) => {
      console.log(item);
      store.addItem(item);
    });
    shoppingList.render();
  });
});

<<<<<<< HEAD
store.items.push(Item.create('apples'));
=======

>>>>>>> mid ex4
