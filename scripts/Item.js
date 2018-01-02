/* global cuid */

// eslint-disable-next-line no-unused-vars
const Item = (function(){
  class Item {
    constructor(name) {
      if (!name) throw new TypeError('Cannot create Item: Must provide name');

      this.id = cuid();
      this.name = name;
      this.checked = false;
    }

    updateName(name) {
      this.name = name;
    }

    toggleChecked() {
      this.checked = !this.checked;
    }
  }

  return Item;
}());
