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
     *
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
     *
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
     * @return {string}
     *
     */
    this.createNote = function(note_content) {

        if (note_content && note_content.toString().length > 0) {
            this.notes.push(note_content.toString());
            return 'Note successfully created';
        } else {
            return 'Cannot create an empty note!';
        }

    };

    /**
     * Method for listing all notes
     *
     * @return {array} notes
     *
     */
    this.listNotes = function() {
        var notes = [];

        if (this.isEmptyNotes()) {
            return 'There are no notes in the database';
        } else {
            for (var i = 0; i < this.notes.length; i++) {
                notes.push(this.notes[i]);
            }
        }

        return notes;
    };

    /**
     * Method for getting a note
     *
     * @param {int} note_id
     * @return {string} note_id
     * @return {string}
     *
     */
    this.getNote = function(note_id) {

        if (this.isValidNoteId(note_id)) {
                return this.notes[note_id];
        } else return 'Invalid ID';

    };

    /**
     * Method for searching for a text string
     *
     * @param {string} search_text
     * @return {string}
     * @return {array} search_result
     *
     */
    this.search = function(search_text) {
        var search_result = [];

        if (search_text === null || search_text === ''
            || typeof(search_text) === 'undefined') {
            return 'Cannot search for empty string';
        }

        search_text = search_text.toString();

        for (var i = 0; i < this.notes.length; i++) {
            if (this.notes[i].indexOf(search_text) >= 0) {
                search_result.push(this.notes[i]);
            }
        }

        if (search_result.length === 0) return 'No result found';

        return search_result;
    };

    /**
     * Method for deleting/removing a note
     *
     * @param {int} note_id
     * @return {string} msg
     *
     */
    this.deleteNote = function(note_id) {

        if (this.isValidNoteId(note_id)) {
            this.notes.splice(note_id, 1);
            return 'Note successfully deleted';
        } else return 'Invalid ID';

    };

    /**
     * Method for editing a note
     *
     * @param {int} note_id
     * @param {string} new_content
     * @return {string}
     *
     */
    this.editNote = function(note_id, new_content) {
        if (this.isValidNoteId(note_id) && new_content) {
            this.notes[note_id] = new_content.toString();
            return 'Note successfully updated';
        }
        return 'Invalid Input';
    };

}


module.exports = NoteTaker;
