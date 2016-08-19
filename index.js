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
     if (typeof(this.author) === 'undefined')  {
         this.author = 'Anonymous';
     } else {
         this.author = author.toString();
     }
     this.notes = [];

    /**
     * prototype function to check if notes exit
     *
     * @return {boolean} isEmpty
     */
    this.isEmptyNoteDb = function() {
        
        var isEmpty = false;
        
        if (this.notes.length < 1) isEmpty = true;
        
        return isEmpty;

    };

    /**
     * prototype function for creating a note
     *
     * @param {string} note_content
     */
    this.create = function(note_content) {
        
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
     * prototype function for listing all notes
     *
     */
    this.listNotes = function() {

    };

    /**
     * prototype function for getting a note
     *
     * @param {int} note_id
     */
    this.getNote = function(note_id) {
        var msg;

        if (!this.isEmptyNoteDb) {
            if (note_id) {

            }
            note_id = parseInt(note_id);
            msg = this.notes[note_id];
        } else {
            msg = 'Please specify an ID';
        }

        return msg;
    };

    /**
     * prototype function for searching for a text string
     *
     * @param {string} search_text
     *
     */
    this.search = function(search_text) {

    };

    /**
     * prototype function for deleting/removing a note
     *
     * @param {int} note_id
     *
     */
    this.deleteNote = function(note_id) {

    };

    /**
     * prototype function for editing a note
     *
     * @param {int} note_id
     * @param {string} new_content
     *
     */
    this.editNote = function(note_id, new_content) {

    };

}

module.exports = NoteTaker;
