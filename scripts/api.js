const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/richie';

  const getItems = function(callback) {
    $.getJSON(BASE_URL + '/items', callback);
  };

  const createItem = function(name, onSuccess, onError) {
    const newItem = JSON.stringify({ name });
    $.ajax({
      url: BASE_URL + '/items',
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: onSuccess,
      error: onError,
    });
  };

  const updateItem = function(id, updateData, onSuccess, onError) {
    $.ajax({
      url: BASE_URL + '/items/' + id,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: onSuccess,
      error: onError,
    });
  };

  const deleteItem = function(id, onSuccess, onError) {
    $.ajax({
      url: BASE_URL + '/items/' + id,
      method: 'DELETE',
      success: onSuccess,
      error: onError,
    });
  };

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
}());