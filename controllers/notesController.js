import Note from '../models/note.js';

const notesController = {
  async getAllNotes(req, res, next) {
    try {
      const notes = Note.findNotesByUserId(req.user.id);
      res.status(200).json({ message: 'OK', notes });
    } catch (error) {
      next(error.name);
    }
  },
};

export default notesController;
