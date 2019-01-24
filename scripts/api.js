// eslint-disable-next-line no-unused-vars
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/rich';

  /**
   * Wrapper function for `fetch`
   * @param {string} url - target of request 
   * @param {object} options 
   */
  const myFetch = function(url, options) {
    // setup var in scope outside of promise chain
    let error = false;
    return fetch(url, options)
      .then(res => {
        if (!res.ok) {
          // if response is not 2xx, indicate error occurred
          error = true;
        }

        // return parsed JSON no matter what
        return res.json();
      })
      .then(data => {
        // if error, then throw the error message so it will land in the next catch()
        if (error) throw new Error(data.message);

        // otherwise, return the json as normal resolution
        return data;
      });
  };

  const getItems = function() {
    return myFetch(BASE_URL + '/items');
  };

  const createItem = function(name) {
    const newItem = JSON.stringify({ name });
    return myFetch(BASE_URL + '/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newItem
    });
  };

  const updateItem = function(id, updateData) {
    const newData = JSON.stringify(updateData);
    return myFetch(BASE_URL + '/items/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newData
    });
  };

  const deleteItem = function(id) {
    return myFetch(BASE_URL + '/items/' + id, {
      method: 'DELETE'
    });
  };

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
}());