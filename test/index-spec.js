var NoteTaker = require('../index');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('Note Taker Class', function(){

    describe('Testing for instantiation of class', function(){
        it('New Object should exist', function(){
            var anonymous = new NoteTaker();
            var femi = new NoteTaker('Abolaji Femi');

            assert.instanceOf(anonymous, NoteTaker);
            assert.instanceOf(femi, NoteTaker);
        });

        it('New Object Anonymous or Femi should have base properties -> author, notes', function(){
            var anonymous = new NoteTaker();
            var femi = new NoteTaker('Abolaji Femi');
    
            femi.createNote('Andela\'s bootcamp is dope');
            femi.createNote('Hello from the other side');
            
            assert(anonymous.hasOwnProperty('author'));
            assert(anonymous.hasOwnProperty('notes'));
            assert(femi.hasOwnProperty('author'));
            assert(femi.hasOwnProperty('notes'));
        });
    });

    describe('isEmptyNotes method', function(){

        it('Should return true if no notes have been created', function(){
            var femi = new NoteTaker('Abolaji Femi');

            assert.isTrue(femi.isEmptyNotes());
        });

    });

    describe('isValidNoteId method', function(){

        it('Should return true if note_id is valid', function(){
            var femi = new NoteTaker('Abolaji Femi');
            femi.createNote('A simple note');

            assert.isTrue(femi.isValidNoteId(0));
        });

    });

    describe('CreateNote method', function(){ 
        it('Should successfully save note if a argument is passed', function(){
            var femi = new NoteTaker('Abolaji Femi');

            assert(femi.createNote('Some message'), 'Note successfully created');
        });

        it('Should return failure msg if no argument is passed', function(){
            var femi = new NoteTaker('Abolaji Femi');

            expect(femi.createNote()).to.equal('Cannot create an empty note!');
        });
    });    

    describe('ListNotes method', function(){ 
        it('Should return a string msg if there are no notes', function(){
            var femi = new NoteTaker('Abolaji Femi');
            femi.createNote();

            expect(femi.listNotes()).to.equal('There are no notes in the database');
        });

        it('Should return an array of notes if there are notes', function(){
            var femi = new NoteTaker('Abolaji Femi');
            femi.createNote('A simple note');

            assert.isTrue(Array.isArray(femi.listNotes()));
        });
    });

    describe('GetNote method', function(){

        it('Should return error if no argument is passed or db empty', function(){
            var femi = new NoteTaker('Abolaji Femi');

            assert(femi.getNote(), 'Invalid ID');
        });

        it('Should return error if wrong argument is passed', function(){
            var femi = new NoteTaker('Abolaji Femi');

            assert(femi.getNote('id'), 'Invalid ID');
        });

        it('Should accept an integer id and return note string', function(){
            var femi = new NoteTaker('Abolaji Femi');
            femi.createNote('A simple note item');
            
            assert(femi.getNote(0), 'A simple note item');
        });

        it('Should accept an string number id and return note string', function(){
            var femi = new NoteTaker('Abolaji Femi');
            femi.createNote('A simple note item');
            
            assert(femi.getNote('0'), 'A simple note item');
        });

    });

    describe('Search Method', function(){

        it('Should not take a null search argument', function(){
            var femi = new NoteTaker('Abolaji Femi');
            femi.createNote('Andela is super cool');
            
            assert(femi.search(), 'Cannot search for empty string');
        });

        it('Should return an array of search results', function(){
            var femi = new NoteTaker('Abolaji Femi');
            femi.createNote('Become world class');
            
            assert.isTrue(Array.isArray(femi.search('class')));
        });

    });

    describe('DeleteNote method', function(){

        it('Should return error if null/wrong argument is passed or if db is empty', function(){
            var femi = new NoteTaker('Abolaji Femi');

            assert(femi.deleteNote(), 'Invalid ID');
            assert(femi.deleteNote(0), 'Invalid ID');
            assert(femi.deleteNote('id'), 'Invalid ID');
        });

        it('Should return a success message if action is successful', function(){
            var femi = new NoteTaker('Abolaji Femi');
            femi.createNote('Doing stuffs with javascript is cool');

            assert(femi.deleteNote(0), 'Note successfully deleted');
            assert(femi.deleteNote('0'), 'Note successfully deleted');
        });

    });

    describe('EditNote Method', function(){

        it('Should not accept null arguments', function(){
            var femi = new NoteTaker('Abolaji Femi');
            femi.createNote('Some really serious testing');

            assert(femi.editNote(), 'Invalid Input');
        });

        it('Should not accept single interger argument', function(){
            var femi = new NoteTaker('Abolaji Femi');
            femi.createNote('Some really serious testing');

            assert(femi.editNote(5), 'Invalid Input');
        });

        it('Should not accept single string parater', function(){
            var femi = new NoteTaker('Abolaji Femi');
            femi.createNote('Some really serious testing');

            assert(femi.editNote('string'), 'Invalid Input');
        });

        it('Should not accept first argument as string', function(){
            var femi = new NoteTaker('Abolaji Femi');
            femi.createNote('Some really serious testing');

            assert(femi.editNote('string', 5), 'Invalid input');
        });

        it('Should accept both arguments as string and test for explicit conversion', function(){
            var femi = new NoteTaker('Abolaji Femi');
            femi.createNote('Some really serious testing');

            assert(femi.editNote('0', '5 or string'), 'Note successfully updated');
        });        

        it('Should accept both arguments as integers', function(){
            var femi = new NoteTaker('Abolaji Femi');
            femi.createNote('Some really serious testing');

            assert(femi.editNote(5, 5), 'Note successfully updated');
        });

    });

});
