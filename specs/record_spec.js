var assert = require('assert');
var Record = require('../record');

describe('Record', function(){

  var record = new Record('Michael Jackson', 'Thriller', 10.00);
  var record2 = new Record('The Doors', 'LA Woman', 12.00);
  var record3 = new Record('Hawkwind', 'Silver Machine', 8.00);
  

  it('should have a title', function(){
    assert.equal('Michael Jackson', record.artist);
  });

  it('should have a title', function(){
    assert.equal('Thriller', record.title);
  });

  it('should have a price', function(){
    assert.equal(10.00, record.price);
  });


});