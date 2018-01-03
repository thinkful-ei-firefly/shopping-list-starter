/* global Item */

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(name) {
    Item.validateName(name, 'create item');
    this.items.push(Item.createItem(name));
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndToggleChecked = function(id) {
    const item = this.findById(id);
    item.checked = !item.checked;
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  const findAndUpdateName = function(id, name) {
    Item.validateName(name, 'update name');
    const item = this.findById(id);
    item.name = name;
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',

    addItem,
    findById,
    findAndToggleChecked,
    findAndDelete,
    findAndUpdateName,
    toggleCheckedFilter,
    setSearchTerm,
  };
  
}());
