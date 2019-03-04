// eslint-disable-next-line no-unused-vars
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/rich';

  /**
   * listApiFetch - Wrapper function for native `fetch` to standardize error handling
   * @param {string} url 
   * @param {object} options 
   */
  const listApiFetch = function(...args) {
    // setup var in scope outside of promise chain
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          // if response is not 2xx, indicate error occurred
          error = { code: res.status };
        }

        // if response is not JSON type, immediately reject with response Status Text
        if (!res.get('content-type').includes('json')) {
          error.message = res.statusText;
          return Promise.reject(error);
        }

        // otherwise, return parsed JSON
        return res.json();
      })
      .then(data => {
        // if error exists, place the JSON message into the error object and 
        // reject the Promise with your error object so it lands in the next 
        // catch.  IMPORTANT: Check how the API sends errors -- not all APIs
        // will respond with a JSON object containing message key
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }

        // otherwise, return the json as normal resolved Promise
        return data;
      });
  };

  const getItems = function() {
    return listApiFetch(BASE_URL + '/items');
  };

  const createItem = function(name) {
    const newItem = JSON.stringify({ name });
    return listApiFetch(BASE_URL + '/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newItem
    });
  };

  const updateItem = function(id, updateData) {
    const newData = JSON.stringify(updateData);
    return listApiFetch(BASE_URL + '/items/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newData
    });
  };

  const deleteItem = function(id) {
    return listApiFetch(BASE_URL + '/items/' + id, {
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