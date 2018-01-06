const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/richie';

  const getItems = function(callback) {
    $.getJSON(BASE_URL + '/items', callback);
  };

  const createItem = function(name, callback) {
    const newItem = JSON.stringify({ name });
    $.ajax({
      url: BASE_URL + '/items',
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    });
  };

  return {
    getItems,
    createItem,
  };
}());