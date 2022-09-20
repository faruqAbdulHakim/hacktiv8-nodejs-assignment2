import { notes } from '../data/index.js';

class Note {
  /**
   *
   * @param {number} user_id
   * @returns {{id: number, title: string, body: string, user_id?: number}[] | []} note object
   */
  static findNotesByUserId(user_id) {
    return notes.filter((note) => note.user_id === user_id);
  }
}

export default Note;
