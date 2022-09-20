import { Router } from 'express';
import notesController from '../controllers/notesController.js';
import usersController from '../controllers/usersController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import contentTypeMiddleware from '../middlewares/contentTypeMiddleware.js';
import errorMiddleware from '../middlewares/errorMiddleware.js';

const router = Router();

router.get('/', authMiddleware, notesController.getAllNotes);
router.post(
  '/login',
  contentTypeMiddleware('application/json'),
  usersController.login
);
router.use(errorMiddleware);

export default router;
