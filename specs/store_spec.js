var Store = require('../store');
var Record = require('../record');
var assert = require('assert');


describe('Store', function(){

  var store = new Store();

  var record;
  var record1;
  var record2;

  beforeEach(function(){
    store = new Store('Vinyl Villans', 'Edinburgh', []);
    record = new Record('Michael Jackson', 'Thriller', 10.00);
    record1 = new Record('The Doors', 'LA Woman', 12.00);
    record2 = new Record('Hawkwind', 'Silver Machine', 8.00);
  });

  it('should have a name', function() {
    assert.equal('Vinyl Villans', store.name);
  });

  it('should have a city', function() {
    assert.equal('Edinburgh', store.city);
  });

  it('should start with an empty inventory', function() {
    assert.deepEqual([], store.inventory);
  });

  it('should be able to add records to inventory', function(){
    store.addRecord(record1);
    assert.deepEqual([record1], store.inventory);
  });

  it('should be able to remove records from inventory', function(){
    store.addRecord(record);
    store.addRecord(record1);
    store.removeRecord(record);
    // store.listInventory();
    assert.deepEqual([record1], store.inventory);
  });

  it('should be able to remove record from inventory when selling', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.sellRecord(record1);
    assert.deepEqual([record2], store.inventory);
  });

  it('should be able to increase balance when record sold', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.sellRecord(record1);
    assert.equal(12.00, store.balance);
  });

  it('should be able to decrease balance when record bought', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.buyRecord(record1);
    assert.equal(-12.00, store.balance);
  });

  it('should be able to find inventory total', function(){
    store.addRecord(record);
    store.addRecord(record1);
    store.addRecord(record2);
    assert.equal(30, store.inventoryValue());
  });

  it('should be able to find store balance total', function(){
    store.addRecord(record);
    store.addRecord(record1);
    assert.equal(22.00, store.cashValue());
  });

});