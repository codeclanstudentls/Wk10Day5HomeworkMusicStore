var Customer = function(){
  this.recordCollection = [];
  this.funds = 100;
  
}

Customer.prototype = {

  addRecord: function(record){
    this.recordCollection.push(record);
  },

  buyRecord: function(record){
    this.recordCollection.splice(this.recordCollection.indexOf(record), 1);
    this.funds -= record.price;
  },

  removeRecord: function(record){
    this.recordCollection.splice(this.recordCollection.indexOf(record), 1);
  },

  sellRecord: function(record){
      this.recordCollection.splice(this.recordCollection.indexOf(record), 1);
      this.funds += record.price;
  },

  





  // sellRecord: function(record){
  //   this.recordCollection.splice(this.recordCollection.indexOf(record), 1);
  //   this.funds += record.price;
  // },




}








module.exports = Customer;