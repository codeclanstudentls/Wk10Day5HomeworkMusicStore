var Customer = require('../customer');
var Store = require('../store');
var Record = require('../record');
var assert = require('assert');

describe('Customer', function(){

  var customer = new Customer();
  var record = new Record();

  var customer;
  var record1;
  var record2;
  var record3;

  beforeEach(function(){
    store = new Store('Vinyl Villans', 'Edinburgh', []);
    customer = new Customer();
    record1 = new Record('Michael Jackson', 'Thriller', 10.00);
    record2 = new Record('The Doors', 'LA Woman', 12.00);
    record3 = new Record('Hawkwind', 'Silver Machine', 8.00);

  
});

  it('should start with an empty recordCollection', function() {
    assert.deepEqual([], customer.recordCollection);
  });

  it('should be able to add a record to collection', function(){
    customer.addRecord(record1);
    assert.deepEqual([record1], customer.recordCollection);
  });

  it('should be able to buy record', function(){
    customer.buyRecord(record1);
    assert.equal(90.00, customer.funds);
  }); 

  it('should be able to decrease funds when record purchased', function(){
// I think I just did it above?? DOH!
  });

  it('should be able to remove record from record collection', function(){

  });

  it('should increase funds when record sold', function(){
    customer.sellRecord(record2);
    assert.equal(112.00, customer.funds);
  });

  it('should increase shop balance when customer buys record', function(){
    customer.buyRecord(record1);
    store.sellRecord(record1);
    assert.equal(10.00, store.balance);

  });

  it('should decrease shop balance when customer sells record', function(){
    customer.sellRecord(record1);
    store.buyRecord(record1);
    assert.equal(-10.00, store.balance);
  });
  

});
