/* global cuid */

// eslint-disable-next-line no-unused-vars
const Item = (function(){

  return {
    validateName: function(name, action) {
      if (!name) throw new TypeError(`Cannot ${action || 'perform action'}: Name must not be blank`);
    },

    createItem: function(name) {
      return {
        id: cuid(),
        name,
        checked: false
      };
    }
  };

}());
