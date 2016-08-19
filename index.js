/**
 * NOTE TAKER APP (ES5)
 *
 * The note taker app is a simple app that helps
 * to manage notes
 *
 * @author Abolaji Femi
 */

function NoteTaker(author) {

     /**
      * @TODO
      */
     if (typeof(author) === 'undefined')  {
         this.author = 'Anonymous';
     } else {
         this.author = author.toString();
     }
     this.notes = [];

    /**
     * Method to check if notes exit
     *
     * @return {boolean} isEmpty
     */
    this.isEmptyNotes = function() {
        
        var isEmpty = false;
        
        if (this.notes.length < 1) isEmpty = true;
        
        return isEmpty;

    };

    /**
     * Method to check if note_id is valid
     *
     * @return {boolean} isValid
     */
    this.isValidNoteId = function(note_id) {
        
        var isValid = true;
        
        if (isNaN(note_id) || note_id >= this.notes.length || 
            note_id < 0 || note_id.toString().length === 0)
            isValid = false;
        
        return isValid;

    };

    /**
     * Method for creating a note
     *
     * @param {string} note_content
     */
    this.createNote = function(note_content) {
        
        var msg;
        
        if (note_content && note_content.toString().length > 0) {
            note_content = note_content.toString();
            this.notes.push(note_content);
            msg = 'Note successfully created';
        } else {
            msg = 'Cannot create an empty note!';
        }
        
        return msg;

    };

    /**
     * Method for listing all notes
     *
     */
    this.listNotes = function() {
        var msg = '';

        if (this.isEmptyNotes()) {
            msg = 'There are no notes in the database';
        } else {
            for (var i = 0; i < this.notes.length; i++) {
                msg += i.toString() + '\n';
                msg += this.notes[i] + '\n\n';
            }

            msg += this.author;
        }
        
        return msg;
    };

    /**
     * Method for getting a note
     *
     * @param {int} note_id
     */
    this.getNote = function(note_id) {
        var msg;

        if (this.isEmptyNotes()){
            msg = 'There are no notes yet';
        } else if(!note_id) {
            msg = 'Please specify an ID';
        } else {
            note_id = parseInt(note_id);

            if (this.isValidNoteId(note_id)) {
                msg = this.notes[note_id];
            } else msg = 'Invalid ID';
        }

        return msg;
    };

    /**
     * Method for searching for a text string
     *
     * @param {string} search_text
     *
     */
    this.search = function(search_text) {

    };

    /**
     * Method for deleting/removing a note
     *
     * @param {int} note_id
     *
     */
    this.deleteNote = function(note_id) {
        var msg;

        if (this.isEmptyNotes()){
            msg = 'There are no notes to delete';
        } else if(!note_id) {
            msg = 'Please specify an ID';
        } else {
            note_id = parseInt(note_id);

            if (this.isValidNoteId(note_id)) {
                this.notes.splice(note_id, 1);
                msg = 'Note successfully deleted';
            } else msg = 'Invalid ID';
        }

        return msg;
    };

    /** 
     * Method for editing a note
     *
     * @param {int} note_id
     * @param {string} new_content
     *
     */
    this.editNote = function(note_id, new_content) {
        var msg;

        if (this.isEmptyNotes()) {
            msg = 'Can\'t update empty notes'; 
        } else {
            if (this.isValidNoteId(note_id) && new_content) {
                note_id = parseInt(note_id);
                this.notes[note_id] = new_content.toString();
                msg = 'Note successfully updated';
            } else {
                msg = 'Invalid input';
            }
        }

        return msg;
    };

}

module.exports = NoteTaker;
