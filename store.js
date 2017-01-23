var Store = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
  

}

Store.prototype = {

  addRecord: function(record){
    this.inventory.push(record);
  },

  removeRecord: function(record){
    this.inventory.splice(this.inventory.indexOf(record), 1);
  },

  sellRecord: function(record){
    this.inventory.splice(this.inventory.indexOf(record), 1);
    this.balance += record.price;
  },

  inventoryValue: function(){
    return this.inventory.reduce(function (accum, record){
      return accum + record.price;
    }, 0);
  },

  cashValue: function(record){
    return this.balance + this.inventoryValue();
    
  },

  listInventory: function(inventory){
    this.inventory.forEach(function (record){
      console.log(record);
    });
  }
 

};

  



module.exports = Store;