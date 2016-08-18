var NoteTaker = require('../index');
var chai = require('chai');
var assert = chai.assert;

describe('Note Taker Class', function(){

    describe('Testing for instantiation of class', function(){

        var anonymous = new NoteTaker();
        var femi = new NoteTaker('Abolaji Femi');

        it('New Object should exist', function(){
            assert.instanceOf(anonymous, NoteTaker);
            assert.instanceOf(femi, NoteTaker);
        });

        it('New Object Anonymous or Femi should have base properties -> author, notes', function(){
            assert(anonymous.hasOwnProperty('author'));
            assert(anonymous.hasOwnProperty('notes'));
            assert(femi.hasOwnProperty('author'));
            assert(femi.hasOwnProperty('notes'));
        });
    });

    describe('Create method: takes in a string', function(){
        it('', function(){
            
        });
    });

});
