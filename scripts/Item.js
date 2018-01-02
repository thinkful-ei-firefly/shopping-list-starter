/* global cuid */

// eslint-disable-next-line no-unused-vars
const Item = (function(){
  class Item {
    constructor(name) {
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
