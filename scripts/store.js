/* global Item */

// eslint-disable-next-line no-unused-vars
const store = (function(){

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',

    addItem(name) {
      this.items.push(new Item(name));
    },

    findById(id) {
      return this.items.find(item => item.id === id);
    },

    findAndToggleChecked(id) {
      const item = this.findById(id);
      item.toggleChecked();
    },

    findAndDelete(id) {
      this.items = this.items.filter(item => item.id !== id);
    },

    findAndUpdateName(id, name) {
      const item = this.findById(id);
      item.updateName(name);
    },

    toggleCheckedFilter() {
      this.hideCheckedItems = !this.hideCheckedItems;
    },

    setSearchTerm(term) {
      this.searchTerm = term;
    }
  };
  
}());