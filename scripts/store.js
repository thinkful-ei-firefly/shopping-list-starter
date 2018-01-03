/* global Item */

// eslint-disable-next-line no-unused-vars
const store = (function(){

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',

    addItem(name) {
      Item.validateName(name, 'create item');
      this.items.push(Item.createItem(name));
    },

    findById(id) {
      return this.items.find(item => item.id === id);
    },

    findAndToggleChecked(id) {
      const item = this.findById(id);
      item.checked = !item.checked;
    },

    findAndDelete(id) {
      this.items = this.items.filter(item => item.id !== id);
    },

    findAndUpdateName(id, name) {
      Item.validateName(name, 'update name');
      const item = this.findById(id);
      item.name = name;
    },

    toggleCheckedFilter() {
      this.hideCheckedItems = !this.hideCheckedItems;
    },

    setSearchTerm(term) {
      this.searchTerm = term;
    }
  };
  
}());