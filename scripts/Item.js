/* global cuid */

// eslint-disable-next-line no-unused-vars
const Item = (function(){

  const validateName = function(name) {
    if (!name) throw new TypeError('Name must not be blank');
  };

  const createItem = function(name) {
    return {
      id: cuid(),
      name,
      checked: false
    };
  };

  return {
    validateName,
    createItem
  };
  
}());
