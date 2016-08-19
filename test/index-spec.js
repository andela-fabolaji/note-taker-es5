var NoteTaker = require('../index');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('Note Taker Class', function(){

    //create globals
    var anonymous = new NoteTaker();
    var femi = new NoteTaker('Abolaji Femi');

    //inject test data
    femi.notes.push('Andela\'s bootcamp is dope');
    femi.notes.push('Hello from the other side');

    describe('Testing for instantiation of class', function(){
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

    describe('isEmptyNotes method', function(){

        it('Should return true if there are no notes in DB', function(){
            expect(femi.isEmptyNotes()).to.equal(false);
        });

    });

    describe('isValidNoteId method', function(){
        var note_id = parseInt('1');

        it('Note id should be an integer value', function(){
            assert.typeOf(note_id, 'number');
        });

        it('Note id should not be greater than length of femi.notes', function(){
            assert(note_id < femi.notes.length);
        });

        it('Note id should not be less than 0', function(){
            assert(note_id >= 0);
        });

        it('Note id should not be less than 1 digit', function(){
            assert(note_id.toString.length > 0);
        });

        it('With other conditions true, note id should be valid', function(){
            assert(femi.isValidNoteId(note_id), true);
        });
    });

    describe('ListNotes method', function(){ 
        it('Should return a string msg', function(){
            expect(femi.listNotes()).to.equal('0\nAndela\'s bootcamp is dope\n\n1\nHello from the other side\n\nAbolaji Femi');
        });
    });

    describe('Create method', function(){ 
        it('Should successfully save note if a parameter is passed', function(){
            assert(femi.create('Some message'), 'Note successfully created');
        });

        it('Should return failure msg if no parameter is passed', function(){
            assert(femi.create(), 'Cannot create an empty note!');
        });
    });    

    describe('GetNote method', function(){
        var note_id = 5;

        it('Should return error msg if no parameter is passed in', function(){
            expect(femi.getNote()).to.equal('Please specify an ID');
        });

        it('Should return accept an integer', function(){
            assert.typeOf(note_id, 'number');
        });

        it('Should return a string msg', function(){
            expect(femi.getNote(note_id)).to.equal('Invalid ID');
        });
    });

});
