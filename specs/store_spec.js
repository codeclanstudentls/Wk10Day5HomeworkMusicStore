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
    store.addRecord();
    assert.equal(0, store.inventory);
  });

});