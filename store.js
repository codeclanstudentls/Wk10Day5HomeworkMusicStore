var Store = function(name, city, inventory){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = [];
  this.total = 0;
}

Store.prototype = {

  addRecord: function(record){
    this.inventory.push(record);
  },

  
}






module.exports = Store;